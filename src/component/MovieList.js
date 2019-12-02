import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';

const root =  {
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden'
}
const gridList = {
  justifyContent: 'space-around',
}

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
  };

  render() {
    return (
    <div style={root}>
        <GridList cellHeight={180} style={gridList}>
          { this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </GridList>
      </div>
    ); 
  }
}
const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieList);