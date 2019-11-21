import { defineMessages } from 'react-intl';

export const scope = 'register_page';

export default defineMessages({
  registerTitle: {
    id: `${scope}.text.register_title`,
    defaultMessage: 'Register'
  },
  loginTitle: {
    id: `${scope}.text.register_title`,
    defaultMessage: 'Login'
  },
  registerButton: {
    id: `${scope}.button.register`,
    defaultMessage: 'Register'
  },
  loginButton: {
    id: `${scope}.button.register`,
    defaultMessage: 'Login'
  },
  loginLink: {
    id: `${scope}.link.login`,
    defaultMessage: 'Already have an account? Login'
  },
  nameInputLabel: {
    id: `${scope}.input_label.name`,
    defaultMessage: 'Name'
  },
  emailInputLabel: {
    id: `${scope}.input_label.email`,
    defaultMessage: 'Email Address'
  },
  passwordInputLabel: {
    id: `${scope}.input_label.password`,
    defaultMessage: 'Password'
  },
  passwordConfirmInputLabel: {
    id: `${scope}.input_label.password_confirm`,
    defaultMessage: 'Password confirmation'
  }
});
