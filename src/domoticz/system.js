function useSystem(domoticzApi) {
  return {
    /**
     * Write a message into Domoticz Logs
     * @param {string} message
     */
    log(message) {
      return domoticzApi.command({
        param: "addlogmessage",
        message: `DOMOTICZ API : ${message}`,
      });
    },

    /**
     * Get various informations about the Domoticz Server
     */
    version() {
      return domoticzApi.command({ param: "getversion" });
    },

    /**
     * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server
     */
    datetimes() {
      return domoticzApi.command({ param: "getSunRiseSet" });
    },

    /**
     * Reboot Domoticz Server
     */
    reboot() {
      return domoticzApi.command({ param: "system_reboot" });
    },

    /**
     * Shutdown the Domoticz Server
     */
    shutdown() {
      return domoticzApi.command({ param: "system_shutdown" });
    },

    /**
     * Start Database backup
     */
    db_backup() {
      return domoticzApi.get("backupdatabase.php");
    },

    /**
     * Execute database cleanup
     */
    db_vaccum() {
      return domoticzApi.command({ param: "vaccumdatabase" });
    },
  };
}

export { useSystem };
