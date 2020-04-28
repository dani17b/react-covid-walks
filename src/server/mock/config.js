import userInfo from './data/user_info.json';

export const serverMockConfig = {
  endpoints: {
    '/login': {
      POST: userInfo
    }
  }
};
