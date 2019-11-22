import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      This is page for movie : {movie.title}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movie.all
  };
};

const mapDispatchToProps = {
  getMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleMoviePage)
);

