import { FIND_WALKS_RESPONSE } from './actions';

const initialState = {
  loading: false,
  walks: []
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case FIND_WALKS_RESPONSE:
      return {
        ...state,
        walks: action.walks
      };

    default:
      return state;
  }
};

export default home;
