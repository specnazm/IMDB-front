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
  createButton: {
    id: `${scope}.button.create`,
    defaultMessage: 'Add'
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
  passwordConfirmInputLabel: {
    id: `${scope}.input_label.password_confirm`,
    defaultMessage: 'Password confirmation'
  }

});