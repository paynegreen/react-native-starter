import {Api} from '../services/api';

export class Environment {
  constructor() {
    this.api = new Api();
  }

  async setup() {
    await this.api.setup();
  }

  /**
   * Our api.
   */
  api: Api;
}
