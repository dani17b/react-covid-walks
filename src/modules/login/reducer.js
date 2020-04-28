import { USER_LOGIN_REQUEST, USER_LOGIN_RESPONSE } from './actions';

const initialState = {
  userInfo: null,
  loading: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_LOGIN_RESPONSE:
      return {
        ...state,
        userInfo: action.userInfo || null,
        loading: action.type === USER_LOGIN_REQUEST
      };
    default:
      return state;
  }
};

export default login;
