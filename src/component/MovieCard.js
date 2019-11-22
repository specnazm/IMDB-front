import React from 'react';
import { card, media } from '../styles/MovieStyle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Register from '../containers/auth/Register';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const MovieCard = ({ movie }) => {
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
          {movie.description.slice(0,150)}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Like
      </Button>
      <Button size="small" color="primary"> 
        Learn More
      </Button>
      <Route exact path="/register" component={Register} />
    </CardActions>
  </Card>
);
};

const mapStateToProps = state => {
  return {
    user: state.authUser
  };
};

const mapDispatchToProps = () => {
  return {
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieCard)
);
