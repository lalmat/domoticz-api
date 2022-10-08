export default class {

  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Get all the Domoticz"s scenes
   */
  all() {
    return this.api.scenes();
  }

  get() {
    return this.all();
  }

  /**
   * Switch a state into a specific state
   *
   * @param {int} idx : Domoticz index of the device
   * @param {string} command : string of the state, ex: 'Off'
   */
  switch(idx, command) {
    return this.api.command({
      param: 'switch',
      idx,
      switchcmd: command
    });
  }

  /**
   * Toggle a device (ex: On/Off
   *
   * @param {int} idx : Domoticz index of the device
   */
  toggle(idx) {
    return this.switch(idx, "Toggle");
  }
}
