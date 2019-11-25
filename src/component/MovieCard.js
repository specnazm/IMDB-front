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

class MovieCard extends Component  {

  render () {
  return (
    <Card style={card}>
    <CardActionArea onClick={this.handle}>
      <CardMedia
        component={RouterLink}
        to={SINGLE_MOVIE_PAGE.replace(":id", this.props.movie.id)}
        style={media}
        image={this.props.movie.image_url}
        title={this.props.movie.title} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {this.props.movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {this.props.movie.description.slice(0,150)}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Like
      </Button>
      <Button 
          component={RouterLink}
          to={SINGLE_MOVIE_PAGE.replace(":id", this.props.movie.id)}
          size="small" 
          color="primary"
          > 
        Learn More
      </Button>
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
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieCard)
);
