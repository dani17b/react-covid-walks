import userInfo from './data/user_info.json';
import adminInfo from './data/user_info_admin.json';
import walksInfo from './data/walks_info.json';

export const serverMockConfig = {
  endpoints: {
    '/login': {
      POST: credentials => ('pepe' === credentials.login) ? adminInfo : userInfo
    },
    '/walks': {
      GET: walksInfo
    }
  }
};
