import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Page from '../Page';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import messages from './messages';
import { getMovies, setSearchResult, setSearchPageCount } from '../../store/actions/MovieActions';
import { container, menuButton, menuButtonHide, appBar, appBarShift } from '../../styles/DashboardStyle';
import { PER_PAGE } from '../../utils/constants';
import SideBar from '../SideBar';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  } 
  handleSideBarOpen = () => {
    this.setState({ open: true });
  };

  handleSideBarClose = () => {
    this.props.setSearchResult([], null);
    this.props.setSearchPageCount({last_page: 0});
    this.setState({ open: false });
  };

  render() {  
    return (
      <Container maxWidth="lg" style={container}>
      <Helmet>
        <title>Pocket IMDB</title>
      </Helmet>
      <CssBaseline />
        <AppBar
          position="fixed"
          style={this.state.open ? appBarShift: appBar}
          >
          <Toolbar>
              <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleSideBarOpen}
              edge="start"
              style={ this.state.open ? menuButtonHide: menuButton }
              >
              <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <FormattedMessage {...messages.startProjectHeader} />
          </Typography>
          </Toolbar>
        </AppBar>
        <SideBar open = {this.state.open}  handleClose = {this.handleSideBarClose} handleOpen={this.handleSideBarOpen}/>
      <Typography variant="h2" component="h1" gutterBottom style={this.state.open ? appBarShift: appBar} >
        <Page  perPage={PER_PAGE} />
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
  getMovies, setSearchResult, setSearchPageCount
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);