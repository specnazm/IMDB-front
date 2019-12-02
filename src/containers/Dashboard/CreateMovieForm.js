import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { createMovie } from '../../store/actions/MovieActions';
import messages from './messages';
import { search, getGenres } from '../../store/actions/MovieActions';

import Button from '@material-ui/core/Button';
import { formStyle, submitButton } from '../../styles/FormStyle';
import { newMovieSchema } from './validations.js';
import { withFormikField } from '../../utils/withFormikField';

const FormikTextField = withFormikField(TextField);

class CreateMovieForm extends Component {
  
  componentDidMount(){
    if (this.props.genres.length == 0){
      this.props.getGenres();
    
    }
  }
  submit = (values) => {
    console.log(this.props.genres);
    const { title, description, genre, imageUrl } = values;
    this.props.createMovie({title, description, genre, imageUrl});
  };

  render() {
    console.log(this.props.genres);
    return (
        <Formik 
          initialValues={{
            title: '',
            genre: '',
            image_url: '',
            description: ''
          }}
          validationSchema={newMovieSchema}
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
                name="imageUrl"
                variant="outlined"
                required
                fullWidth
                label={<FormattedMessage {...messages.imageUrlInputLabel} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={FormikTextField}
                type="text"
                name="description"
                variant="outlined"
                required
                fullWidth
                label={<FormattedMessage {...messages.descriptionInputLabel} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as="select"
                name="genre"
                variant="outlined"
                required
                label={<FormattedMessage {...messages.genreInputLabel} />}
              >
                {this.props.genres.map(genre => <option value={genre.id}>{genre.name}</option>)}
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
          <FormattedMessage {...messages.createButton} />
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
    genres : state.search.genres 
  };
};

const mapDispatchToProps = {
  createMovie, getGenres
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateMovieForm)
);
