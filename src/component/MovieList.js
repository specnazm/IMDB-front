import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { connect } from 'react-redux';

class MovieList extends Component {
    static propTypes = {
      movies: PropTypes.array.isRequired,
    };
  
    render() {
      return (
        <div>
           {this.props.movies.map(movie => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      movies: state.movie.all
    };
  };
  
  const mapDispatchToProps = {
  };
  
  export default 
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(MovieList);
  