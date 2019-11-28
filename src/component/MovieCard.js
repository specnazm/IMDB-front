import React, { Component } from 'react';
import { card, media } from '../styles/MovieStyle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { SINGLE_MOVIE_PAGE } from '../routes';
import LikeIcon from '@material-ui/icons/ThumbUpAlt';
import DislikeIcon from '@material-ui/icons/ThumbDownAlt';
import { IconButton } from '@material-ui/core';
import { LIKE, DISLIKE, LIKE_BUTTON, DISLIKE_BUTTON } from '../utils/constants';
import { buttonColor } from '../utils/utils';
import { addReaction } from '../store/actions/MovieActions';

class MovieCard extends Component  {

  handleReactionClick(newReaction, oldReaction, id) {
    if (newReaction == oldReaction)
        newReaction = null;
    this.props.addReaction(id, newReaction, oldReaction)
  }

  render () {
    const { id, image_url, title, description, likes_count, dislikes_count } = this.props.movie;
    const reaction = this.props.movie.user_reaction.length > 0 ? this.props.movie.user_reaction[0].reaction:null
    return (
    <Card style={card}>
    <CardActionArea >
      <CardMedia
        component={RouterLink}
        to={SINGLE_MOVIE_PAGE.replace(":id", id)}
        style={media}
        image={image_url}
        title={title} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description.slice(0,150)}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Like
      </Button>
      <Button 
          component={RouterLink}
          to={SINGLE_MOVIE_PAGE.replace(":id", id)}
          size="small" 
          color="primary"
          > 
        Learn More
      </Button>
      <IconButton  
          color={buttonColor(LIKE_BUTTON,reaction)} 
          size="small" 
          onClick={() => this.handleReactionClick(LIKE, reaction, id)}
          ><LikeIcon></LikeIcon>{likes_count}</IconButton>
      <IconButton  
           color={buttonColor(DISLIKE_BUTTON,reaction)} 
          size="small"
          onClick={() => this.handleReactionClick(DISLIKE, reaction, id)}
          ><DislikeIcon></DislikeIcon>{dislikes_count}</IconButton>
    </CardActions>
    </Card>
);
};
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
  addReaction
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieCard)
);