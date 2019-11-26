import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie } from '../../store/actions/MovieActions';
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

class MoviePage extends Component {

    componentDidMount() {
      const $id = this.props.match.params.id;
      if (!this.props.selected)
        this.props.getMovie($id);
    }
    render() {
      const { image_url, title, description } = this.props.movieInfo.movie;
      const { likes, dislikes } = this.props.movieInfo.reactions;
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
          <IconButton  color="success" size="small"onClick={()=>console.log('da')}><LikeIcon></LikeIcon>{likes}</IconButton>
          <IconButton  color="success" size="small"onClick={()=>console.log('da')}><DislikeIcon></DislikeIcon>{dislikes}</IconButton>
        </CardActions>
      </Card>
      );
    }
   
};

const mapStateToProps = state => {
    return {
      movieInfo: state.movie.selected
    };
  };
  
  const mapDispatchToProps = {
    getMovie
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(MoviePage)
  );
  