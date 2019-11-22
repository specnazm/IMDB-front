import { defineMessages } from 'react-intl';

export const scope = 'welcome_page';

export default defineMessages({
  loginLink: {
    id: `${scope}.link.login`,
    defaultMessage: 'Login'
  },
  registerLink: {
    id: `${scope}.link.register`,
    defaultMessage: 'Register'
  },
  heading: {
    id: `${scope}.heading`,
    defaultMessage: 'Pocket IMDB'
  },
  subheading: {
    id: `${scope}.subheading`,
    defaultMessage: 'Find ratings and reviews for the newest movie and TV shows.'
  },
});
