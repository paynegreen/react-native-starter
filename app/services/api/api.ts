import {ApiConfig} from './api-config';

import {API_URL} from '../../config/env';

export class Api {
  static config: ApiConfig = {
    baseUrl: API_URL,
    headers: {
      'content-type': 'application/json',
    },
  };

  constructor() {}
}
