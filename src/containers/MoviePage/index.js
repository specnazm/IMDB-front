import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Container from '@material-ui/core/Container';
import SideBar from '../SideBar';
import { container, menuButton, menuButtonHide, appBar, appBarShift } from '../../styles/DashboardStyle';
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
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { LIKE, DISLIKE, LIKE_BUTTON, DISLIKE_BUTTON } from '../../utils/constants'
import { buttonColor } from '../../utils/utils';
import { RELATED } from '../../utils/constants';

class MoviePage extends Component {

    componentDidMount() {
      const id = this.props.match.params.id;
      if (!this.props.selected)
        this.props.getMovie(id);
    }
    componentDidUpdate() {
      const id = this.props.match.params.id;
      if (this.props.movie.id != id)
        this.props.getMovie(id);
    }

    handleReactionClick(newReaction, oldReaction, id) {
      if (newReaction === oldReaction)
          newReaction = null;
      this.props.addReaction(id, newReaction, oldReaction)
    }
 
    render() {
      const { id, image_url, title, description, visited, likes_count, dislikes_count, genre, user_reaction } = this.props.movie;
      return (
        <Container maxWidth="lg" style={container}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
          <SideBar type={RELATED}/>
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
            <Typography gutterBottom variant="body1" component="h3">
              {genre}
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
              <VisibilityOutlinedIcon/><Typography>{visited}</Typography>
        </CardActions>
      </Card>
      </Container>
      );
    }
   
};

const mapStateToProps = state => {
    return {
      movie: state.movie.selected || {}
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