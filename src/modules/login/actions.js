import { fetch } from '../../server';
import i18next from 'i18next';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_RESPONSE = 'USER_LOGIN_RESPONSE';
export const USER_LOGIN_RESPONSE_ERROR = 'USER_LOGIN_RESPONSE_ERROR';
export const USER_INFO = 'USER_INFO';
export const login = credentials => {
  return dispatch => {
    dispatch({
      type: USER_LOGIN_REQUEST
    });

    fetch('/login', {
      method: 'POST',
      body: {
        ...credentials
      }
    })
      .then(response => response.json())
      .then(userInfo => {
        if (userInfo.error) {
          dispatch({
            type: USER_LOGIN_RESPONSE_ERROR,
            error: userInfo.error
          });
        } else {
          localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
          i18next.changeLanguage(userInfo.idioma);
          dispatch({
            type: USER_LOGIN_RESPONSE,
            userInfo
          });
        }
      });
  };
};
