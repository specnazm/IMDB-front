import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import messages from './messages';
import { paper, avatar } from '../../styles/FormStyle';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import CreateMovieForm from './CreateMovieForm';
import CreateMovieOMDB from './CreateMovieOMDB';
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
                    <MovieCreationOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    <FormattedMessage {...messages.createMovieTitle} />
                </Typography>
                <Grid>
                    <Divider />
                    {this.props.OMDB ?
                    <CreateMovieOMDB handleClose={this.props.handleClose}/> :
                    <CreateMovieForm handleClose={this.props.handleClose}/>}
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
