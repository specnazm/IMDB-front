import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { register } from '../../store/actions/AuthActions';
import messages from './messages';
import { paper, avatar } from '../../styles/FormStyle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CreateMovieForm from './CreateMovieForm';
import Modal from '@material-ui/core/Modal';

class CreateMovie extends Component {

    
    render() {
        return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.open}
            onClose={this.props.handleClose} >
            <Container component="main" maxWidth="xs">
                <Helmet>
                <title>Create movie</title>
                </Helmet>
                <Paper style={paper}>
                <Avatar style={avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    <FormattedMessage {...messages.createMovieTitle} />
                </Typography>
                <Grid>
                    <Divider />
                    <CreateMovieForm handleClose={this.props.handleClose}/>
                </Grid>
                </Paper>
            </Container>
        </Modal>
        );
    }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = {

};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateMovie)
);
