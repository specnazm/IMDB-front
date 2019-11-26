import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authUser } from '../store/actions/AuthActions';
import Routes from './Routes';
import {
  DASHBOARD,
  LOGIN
} from '../routes'


export default class AppLayout extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        this.props.history.push(DASHBOARD);
      } else {
        this.props.history.push(LOGIN);
      }
    }
  }

  render() {
      return (
        <Routes />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authUser
  };
};

const mapDispatchToProps = () => {
  return {
    authUser
  };
};
