import userInfo from './data/user_info.json';
import walksInfo from './data/walks_info.json';

export const serverMockConfig = {
  endpoints: {
    '/login': {
      POST: userInfo
    },
    '/walks': {
      GET: walksInfo
    }
  }
};
