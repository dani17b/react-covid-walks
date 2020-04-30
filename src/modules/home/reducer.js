import { FIND_WALKS_RESPONSE, FIND_FRIENDS_RESPONSE } from './actions';

const initialState = {
  loading: false,
  walks: [],
  friends: []
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case FIND_WALKS_RESPONSE:
      return {
        ...state,
        walks: action.walks
      };
    case FIND_FRIENDS_RESPONSE:
      return {
        ...state,
        friends: action.friends
      };
    default:
      return state;
  }
};

export default home;
