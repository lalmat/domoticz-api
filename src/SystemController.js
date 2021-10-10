export default class {

  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Write a message into Domoticz Logs
   * @param {string} message
   */
  async log(message) {
    message = "----------- DOMOTICZ API -----------> " + message;
    let uri = `type=command&param=addlogmessage&message=${encodeURI(message)}`;
    return await this.api.send(uri);
  }

  /**
   * Get various informations about the Domoticz Server
   */
  async version() {
    let uri = "type=command&param=getversion";
    return await this.api.send(uri);
  }

  /**
   * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server
   */
  async datetimes() {
    let uri = "type=command&param=getSunRiseSet";
    return await this.api.send(uri);
  }


  /**
   * Reboot Domoticz Server
   */
  async reboot() {
    let uri = "type=command&param=system_reboot";
    return await this.api.send(uri);
  }

  /**
   * Shutdown the Domoticz Server
   */
  async shutdown() {
    let uri = "type=command&param=system_reboot";
    return await this.api.send(uri);
  }

  /**
   * Start Database backup
   */
  async db_backup() {
    let uri = "backupdatabase.php";
    return await this.api.url(uri);
  }

  /**
   * Execute database cleanup
   */
  async db_vaccum() {
    let uri = "type=command&param=vacuumdatabase";
    return await this.api.send(uri);
  }
}
