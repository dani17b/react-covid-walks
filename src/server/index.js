import { Config } from '../config/Config';
import { serverMockConfig } from './mock/config';

export const fetch = (url, options) => {
  if (
    Config.useMockData &&
    Object.keys(serverMockConfig.endpoints).indexOf(url) !== -1
  ) {
    const urlData =
      serverMockConfig.endpoints[url][
        options && options.method ? options.method.toUpperCase() : 'GET'
      ];

    if (urlData) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            json: () => new Promise(resolve => resolve(urlData))
          });
        }, Config.mockDataLoadTime);
      });
    }
  }

  return window.fetch(Config.serviceURL + url, options);
};
