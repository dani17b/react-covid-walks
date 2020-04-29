import { Config } from '../config/Config';
import { serverMockConfig } from './mock/config';

export const fetch = (url, options) => {
  if (
    Config.useMockData &&
    Object.keys(serverMockConfig.endpoints).indexOf(url) !== -1
  ) {
    let urlData =
      serverMockConfig.endpoints[url][
        options && options.method ? options.method.toUpperCase() : 'GET'
      ];

    if (typeof urlData == 'function') {
      urlData = urlData(options.body);
    }

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
