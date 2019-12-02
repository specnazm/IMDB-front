import { defineMessages } from 'react-intl';

export const scope = 'side_bar';

export default defineMessages({
  searchHeader: {
    id: `${scope}.search.header`,
    defaultMessage: 'Search movies by title'
  },
  popularMoviesHeader: {
    id: `${scope}.popularMovies.header`,
    defaultMessage: 'Most popular movies '
  },
  addMovie: {
    id: `${scope}.addMovie.header`,
    defaultMessage: 'Add movie'
  }
});
