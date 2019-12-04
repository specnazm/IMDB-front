import { defineMessages } from 'react-intl';

export const scope = 'dashboard';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Pocket IMDB '
  },
  createMovieTitle: {
    id: `${scope}.text.create_movie_title`,
    defaultMessage: 'Create new movie'
  },
  createMovieOMDBTitle: {
    id: `${scope}.text.create_movie_OMDB_title`,
    defaultMessage: 'Search for movie in OMDB'
  },
  createButton: {
    id: `${scope}.button.create`,
    defaultMessage: 'Add'
  },
  searchButton: {
    id: `${scope}.button.search`,
    defaultMessage: 'Search'
  },
  cancelButton: {
    id: `${scope}.button.cancel`,
    defaultMessage: 'Cancel'
  },
  titleInputLabel: {
    id: `${scope}.input_label.title`,
    defaultMessage: 'Title'
  },
  descriptionInputLabel: {
    id: `${scope}.input_label.description`,
    defaultMessage: 'Description'
  },
  genreInputLabel: {
    id: `${scope}.input_label.genre`,
    defaultMessage: 'Genre'
  },
  imageUrlInputLabel: {
    id: `${scope}.input_label.imageUrl`,
    defaultMessage: 'Image url'
  },
  yearInputLabel: {
    id: `${scope}.input_label.year`,
    defaultMessage: 'Year'
  }

});