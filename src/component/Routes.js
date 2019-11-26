import React from 'react';
import PrivateRoute from '../containers/PrivateRoute';
import PublicRoute from '../containers/PublicRoute';
import WelcomePage from '../containers/WelcomePage';
import Dashboard from '../containers/Dashboard';
import MoviePage from '../containers/MoviePage';
import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register';
import { BrowserRouter, Switch } from 'react-router-dom';
import {
  WELCOME,
  DASHBOARD,
  LOGIN,
  REGISTER,
  SINGLE_MOVIE_PAGE
} from '../routes';

 export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={WelcomePage} path={WELCOME} exact />
          <PublicRoute restricted={true} component={Register} path={REGISTER} exact />
          <PublicRoute restricted={true} component={Login} path={LOGIN} exact />
          <PrivateRoute component={Dashboard} path={DASHBOARD} exact />
          <PrivateRoute component={MoviePage} path={SINGLE_MOVIE_PAGE} exact />
        </Switch>
      </BrowserRouter>
  );
}