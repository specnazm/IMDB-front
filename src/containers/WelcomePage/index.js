import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import messages from './messages';
import { root, main, button } from '../../styles/WelcomPageStyle';
import { LOGIN, REGISTER } from '../../routes'
  

export function WelcomePage() {

  return (
    <div style={root}>
      <Helmet>
        <title>Welcome - Pocket imdb</title>
      </Helmet>
      <Grid container justify="flex-end">
        <Button
          component={RouterLink}
          to={LOGIN}
          variant="outlined"
          style={button}
        >
          <FormattedMessage {...messages.loginLink} />
        </Button>
        <Button
          component={RouterLink}
          to={REGISTER}
          variant="contained"
          color="primary"
          style={button}
        >
          <FormattedMessage {...messages.registerLink} />
        </Button>
      </Grid>
      <Container component="main" style={main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          <FormattedMessage {...messages.heading} />
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          <FormattedMessage {...messages.subheading} />
        </Typography>
      </Container>
    </div>
  );
}

export default WelcomePage;
