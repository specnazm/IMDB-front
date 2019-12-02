import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { register } from '../../store/actions/AuthActions';
import messages from './messages';
import Button from '@material-ui/core/Button';
import { formStyle, submitButton } from '../../styles/FormStyle';
import { registerSchema } from './validations';
import { withFormikField } from '../../utils/withFormikField';

const FormikTextField = withFormikField(TextField);

class RegisterForm extends Component {
  
  submit = (values) => {
    const { name, email, password } = values;
    this.props.register({name, email, password});
  };

  render() {
    return (
        <Formik 
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''
          }}
          validationSchema={registerSchema}
          onSubmit={this.submit}
          style={formStyle}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  component={FormikTextField}
                  type="text"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  label={<FormattedMessage {...messages.nameInputLabel} />}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              <Field
                component={FormikTextField}
                type="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                label={<FormattedMessage {...messages.emailInputLabel} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={FormikTextField}
                type="password"
                name="password"
                variant="outlined"
                required
                fullWidth
                label={<FormattedMessage {...messages.passwordInputLabel} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={FormikTextField}
                type="password"
                name="passwordConfirm"
                variant="outlined"
                required
                fullWidth
                label={<FormattedMessage {...messages.passwordConfirmInputLabel} />}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={submitButton}
          >
          <FormattedMessage {...messages.registerButton} />
        </Button>
        </Form>
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerError: state.error.registerError
  };
};

const mapDispatchToProps = {
  register
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterForm)
);
