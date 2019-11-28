import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie, addReaction } from '../../store/actions/MovieActions';
import { card, media } from '../../styles/MovieStyle'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LikeIcon from '@material-ui/icons/ThumbUpAlt';
import DislikeIcon from '@material-ui/icons/ThumbDownAlt';
import { IconButton } from '@material-ui/core';
import { LIKE, DISLIKE, LIKE_BUTTON, DISLIKE_BUTTON } from '../../utils/constants'
import { buttonColor } from '../../utils/utils';

class MoviePage extends Component {

    componentDidMount() {
      const $id = this.props.match.params.id;
      if (!this.props.selected)
        this.props.getMovie($id);
    }

    handleReactionClick(newReaction, oldReaction, id) {
      if (newReaction == oldReaction)
          newReaction = null;
      this.props.addReaction(id, newReaction, oldReaction)
    }
 
    render() {
      const { id, image_url, title, description, likes_count, dislikes_count, user_reaction } = this.props.movie;
      return (
        <Card style={card}>
        <CardActionArea>
          <CardMedia
            style={media}
            image={image_url}
            title={title} 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton  
              color={buttonColor(LIKE_BUTTON,user_reaction)} 
              size="small" 
              onClick={() => this.handleReactionClick(LIKE, user_reaction, id)}
             ><LikeIcon></LikeIcon>{likes_count}</IconButton>
          <IconButton  
              color={buttonColor(DISLIKE_BUTTON,user_reaction)} 
              size="small"
              onClick={() => this.handleReactionClick(DISLIKE, user_reaction, id)}
              ><DislikeIcon></DislikeIcon>{dislikes_count}</IconButton>
        </CardActions>
      </Card>
      );
    }
   
};

const mapStateToProps = state => {
    return {
      movie: state.movie.selected
    };
  };
  
  const mapDispatchToProps = {
    getMovie,
    addReaction
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(MoviePage)
  );