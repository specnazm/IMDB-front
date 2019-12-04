import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import messages from './messages';
import { searchMovieOMDB } from '../../store/actions/MovieActions';
import Button from '@material-ui/core/Button';
import { formStyle, submitButton } from '../../styles/FormStyle';
import { withFormikField } from '../../utils/withFormikField';

const FormikTextField = withFormikField(TextField);

class CreateMovieOMDB extends Component {
  
  submit = (values) => {
    this.props.searchMovieOMDB(values);
    this.props.handleClose();
  };

  render() {
    return (
        <Formik 
          initialValues={{
            title: '',
            year: '',
            plot: ''
          }}
          onSubmit={this.submit}
          style={formStyle}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  component={FormikTextField}
                  type="text"
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  label={<FormattedMessage {...messages.titleInputLabel} />}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              <Field
                component={FormikTextField}
                type="text"
                name="year"
                variant="outlined"
                fullWidth
                label={<FormattedMessage {...messages.yearInputLabel} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as="select"
                name="plot"
                variant="outlined"
                required
                >
                <option value="full">Full</option>
                <option value=''>Short</option>
              </Field>
            </Grid>
          </Grid>
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="primary"
            style={submitButton}
          >
          <FormattedMessage {...messages.searchButton} />
        </Button>
        <Button
            size="small"
            variant="contained"
            color="primary"
            style={submitButton}
            onClick={this.props.handleClose}
          >
          <FormattedMessage {...messages.cancelButton} />
        </Button>
        </Form>
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
  searchMovieOMDB
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateMovieOMDB)
);