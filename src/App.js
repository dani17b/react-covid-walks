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
import WalkInfo from './modules/walkInfo/WalkInfo';
import NewWalk from './modules/newWalk/NewWalk';
import FriendInfo from './modules/friendInfo/FriendInfo';


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
          <PrivateRoute path="/" exact={true}>
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/walk/:id" restrictedTo={['admin']}>
            <WalkInfo />
          </PrivateRoute>
          <PrivateRoute path="/new-walk">
            <NewWalk />
          </PrivateRoute>
          <PrivateRoute path="/friend/:id" restrictedTo={['admin']}>
            <FriendInfo />
          </PrivateRoute>
          <Route path="/not-allowed">
            <div>No tienes permisos para ver esta ruta</div>
            <a href="/">Volver a home</a>
          </Route>
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
