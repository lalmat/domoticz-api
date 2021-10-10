export default class {

  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Get all the Domoticz"s scenes
   */
  async get() {
    let uri = "type=scenes";
    return await this.api.send(uri);
  }

  /**
   * Switch a state into a specific state
   *
   * @param {int} idx : Domoticz index of the device
   * @param {string} command : string of the state, ex: 'Off'
   */
  async switch(idx, command) {
    let uri = `type=command&param=switchscene&idx=${idx}&switchcmd=${command}`;
    return await this.api.send(uri);
  }

  /**
   * Toggle a device (ex: On/Off
   *
   * @param {int} idx : Domoticz index of the device
   */
  async toggle(idx) {
    this.switch(idx, "Toggle");
  }
}
