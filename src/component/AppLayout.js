import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register';
import Dashboard from '../containers/Dashboard';
import WelcomePage from '../containers/WelcomePage'
import { BrowserRouter, Switch } from 'react-router-dom';
import { authUser } from '../store/actions/AuthActions';
import PrivateRoute from '../containers/PrivateRoute';
import PublicRoute from '../containers/PublicRoute';
import {
  WELCOME,
  DASHBOARD,
  LOGIN,
  REGISTER
} from '../routes'


class AppLayout extends React.Component {
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
        <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={WelcomePage} path={WELCOME} exact />
          <PublicRoute restricted={true} component={Register} path={REGISTER} exact />
          <PublicRoute restricted={true} component={Login} path={LOGIN} exact />
          <PrivateRoute component={Dashboard} path={DASHBOARD} exact />
        </Switch>
      </BrowserRouter>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppLayout)
);
