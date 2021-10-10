export default class {

  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Retrieve all Domoticz Events
   */
  async get() {
    let uri = "type=events&param=list";
    return await this.api.send(uri);
  }
}
