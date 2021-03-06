import React, { useState } from 'react';
import { connect } from 'react-redux';
import './login.scss';
import { login } from './actions';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import LottieAnimation, {
  LOTTIE_ANIMATION_TYPE
} from '../../components/lottie/Lottie';

import { useTranslation } from 'react-i18next';

const Login = props => {
  const { login, loading, error } = props;

  const { t } = useTranslation('login');

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
            placeholder={t('etiquetaUsuario.descripcion')}
            value={userLogin.login}
            onChange={e =>
              setUserLogin({ ...userLogin, login: e.target.value })
            }
          />
          <input
            type="password"
            className="login__form__input"
            placeholder={t('etiquetaContraseña.descripcion')}
            value={userLogin.password}
            onChange={e =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
          />
          <button className="login__form__button">Iniciar sesión</button>
          <div
            className="login__form__error"
            style={{
              opacity: error != null ? 1 : 0,
              height: error != null ? 'auto' : 0
            }}
          >
            <IoIosInformationCircleOutline className="icon" />
            <span className="message">Error al hacer iniciar sesión</span>
          </div>
        </form>
      )}
      {loading && (
        <div className="login__loading">
          <LottieAnimation animation={LOTTIE_ANIMATION_TYPE.LOADING} />
        </div>
      )}
    </div>
  );
};

export default connect(
  store => ({
    loading: store.login.loading,
    error: store.login.error
  }),
  dispatch => ({
    login: credentials => dispatch(login(credentials))
  })
)(Login);
