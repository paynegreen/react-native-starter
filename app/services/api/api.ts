import {ApiConfig} from './api-config';

import {API_URL} from '../../config/env';

export class Api {
  /**
   * The underlying axios instance which performs the requests.
   */
  // apisauce: ApisauceInstance;

  static config: ApiConfig = {
    baseUrl: API_URL,
    headers: {
      'content-type': 'application/json',
    },
  };

  constructor() {}

  setup() {
    // construct the axios instance
    // this.apisauce = create({
    //   baseURL: this.config.url,
    //   timeout: this.config.timeout,
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // });
  }
}
