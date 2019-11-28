import React, { Component } from 'react';
import Page from '../Page';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import messages from './messages';
import { getMovies } from '../../store/actions/MovieActions';
import { container } from '../../styles/DashboardStyle';
import { PER_PAGE } from '../../utils/constants';

class Dashboard extends Component {
  
  render() {
    return (
      <Container maxWidth="lg" style={container}>
      <Helmet>
        <title>Pocket IMDB</title>
      </Helmet>
      <Typography variant="h2" component="h1" gutterBottom>
        <FormattedMessage {...messages.startProjectHeader} />
        <Page perPage={PER_PAGE} />
      </Typography>
    </Container>
    );
  }
}

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
  )(Dashboard)
);
