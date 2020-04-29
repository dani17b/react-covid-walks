import React from 'react';
import { connect } from 'react-redux';
import './login.scss';
import { login } from './actions';

function Login(props) {
  const { login, loading } = props;

  return (
    <div className='login'>
      {!loading && (
        <form
          className='login__form'
          onSubmit={e => {
            e.preventDefault();
            login({ login: 'jose', password: 'password' });
          }}
        >
          <input
            type='text'
            className='login__form__input'
            placeholder='Nombre de usuario'
          />
          <input
            type='password'
            className='login__form__input'
            placeholder='Contraseña'
          />
          <button className='login__form__button'>Iniciar sesión</button>
        </form>
      )}
      {loading && <div className='login__loading'>Cargando</div>}
    </div>
  );
}

export default connect(
  store => ({
    loading: store.login.loading
  }),
  dispatch => ({
    login: credentials => dispatch(login(credentials))
  })
)(Login);
