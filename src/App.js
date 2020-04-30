import React from 'react';
import './app.scss';
import Header from './components/header/Header';
import Home from './modules/home/Home';
import Login from './modules/login/Login';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './components/privateRoute/PrivateRoute';

function App(props) {
  const { userInfo } = props;
  return (
    <div className="app">
      <div className="app-bg"></div>
      <Header />
      <Router>
        <Switch>
          <Route path="/login">
            {!userInfo && <Login />}
            {userInfo && (
              <Redirect
                to={{
                  pathname: '/'
                }}
              />
            )}
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default connect(
  store => ({
    userInfo: store.login.userInfo
  }),
  null
)(App);
