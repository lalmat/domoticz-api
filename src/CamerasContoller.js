export default class {

  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Get all cameras informations
   */
  async get() {
    let uri = "type=cameras";
    let response = await this.api.send(uri);
    return response.result;
  }

}
