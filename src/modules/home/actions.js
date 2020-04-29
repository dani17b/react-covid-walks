import { fetch } from '../../server';

export const FIND_WALKS_REQUEST = 'FIND_WALKS_REQUEST';
export const FIND_WALKS_RESPONSE = 'FIND_WALKS_RESPONSE';

export const findWalks = () => {
  return dispatch => {
    dispatch({
      type: FIND_WALKS_REQUEST
    });

    fetch('/walks')
      .then(response => response.json())
      .then(walks => {
        dispatch({
          type: FIND_WALKS_RESPONSE,
          walks
        });
      });
  };
};
