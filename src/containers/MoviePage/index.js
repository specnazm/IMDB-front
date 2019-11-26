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
import Button from '@material-ui/core/Button';



class MoviePage extends Component {

    componentDidMount() {
      const $id = this.props.match.params.id;
      if (!this.props.selected)
        this.props.getMovie($id);
    }
    render() {
    
      const movie = this.props.movieInfo.movie;
      const reactions = this.props.movieInfo.reactions;
      console.log(movie);
      console.log(reactions);
      return (
        <Card style={card}>
        <CardActionArea>
          <CardMedia
            style={media}
            image={movie.image_url}
            title={movie.title} 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">Like</Button>
          <Button size="small" color="primary">Dislike</Button>
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
  