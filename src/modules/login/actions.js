import { fetch } from '../../server';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_RESPONSE = 'USER_LOGIN_RESPONSE';
export const login = (credentials) => {
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
        dispatch({
          type: USER_LOGIN_RESPONSE,
          userInfo
        });
      });
  };
};
