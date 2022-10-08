export default class {
  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Write a message into Domoticz Logs
   * @param {string} message
   */
  log(message) {
    return this.api.command({
      param: "addlogmessage",
      message: `############# DOMOTICZ API ############# => ${message}`,
    });
  }

  /**
   * Get various informations about the Domoticz Server
   */
  version() {
    return this.api.command({ param: "getversion" });
  }

  /**
   * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server
   */
  datetimes() {
    return this.api.command({ param: "getSunRiseSet" });
  }

  /**
   * Reboot Domoticz Server
   */
  reboot() {
    return this.api.command({ param: "system_reboot" });
  }

  /**
   * Shutdown the Domoticz Server
   */
  shutdown() {
    return this.api.command({ param: "system_shutdown" });
  }

  /**
   * Start Database backup
   */
  db_backup() {
    return this.api.get("backupdatabase.php");
  }

  /**
   * Execute database cleanup
   */
  db_vaccum() {
    return this.api.command({ param: "vaccumdatabase" });
  }
}
