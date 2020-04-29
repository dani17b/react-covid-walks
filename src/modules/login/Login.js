import React, { useState } from 'react';
import { connect } from 'react-redux';
import './login.scss';
import { login } from './actions';

const Login = props => {
  const { login, loading } = props;

  const [userLogin, setUserLogin] = useState({ login: '', password: '' });

  return (
    <div className="login">
      {!loading && (
        <form
          className="login__form"
          onSubmit={e => {
            e.preventDefault();

            login(userLogin);
          }}
        >
          <input
            type="text"
            className="login__form__input"
            placeholder="Nombre de usuario"
            value={userLogin.login}
            onChange={e => setUserLogin({ ...userLogin, login: e.target.value })}
          />
          <input
            type="password"
            className="login__form__input"
            placeholder="Contraseña"
            value={userLogin.password}
            onChange={e => setUserLogin({ ...userLogin, password: e.target.value })}
          />
          <button className="login__form__button">Iniciar sesión</button>
        </form>
      )}
      {loading && <div className="login__loading">Cargando</div>}
    </div>
  );
};

export default connect(
  store => ({
    loading: store.login.loading
  }),
  dispatch => ({
    login: credentials => dispatch(login(credentials))
  })
)(Login);
