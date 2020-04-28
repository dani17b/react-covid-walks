import React from 'react';
import './app.scss';
import Header from './components/header/Header';
import Home from './modules/home/Home';
import Login from './modules/login/Login';
import { connect } from 'react-redux';

function App(props) {
  const { userInfo } = props;
  return (
    <div className="app">
      <div className="app-bg"></div>
      <Header />
      {userInfo == null && <Login />}
      {userInfo != null && <Home />}
    </div>
  );
}

export default connect(
  store => ({
    userInfo: store.login.userInfo
  }),
  null
)(App);
