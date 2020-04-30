import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESPONSE,
  USER_LOGIN_RESPONSE_ERROR
} from './actions';
import getUserInfo from '../../utils/ApplicationUtils';

const initialState = {
  userInfo: getUserInfo(),
  loading: false,
  error: null
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
    case USER_LOGIN_RESPONSE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default login;
