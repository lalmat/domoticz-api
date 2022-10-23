import { DomoticzApiProvider } from '../index'

function useSystem (domoticzApi: DomoticzApiProvider): any {
  return {
    /**
     * Write a message into Domoticz Logs
     * @param {String} message
     */
    async log (message: string) {
      return await domoticzApi.command({
        param   : 'addlogmessage',
        message : `DOMOTICZ API : ${message}`
      })
    },

    /**
     * Check Credentials
     */
    async checkCredentials () {
      try {
        await domoticzApi.checkCredentials()
        return true
      } catch (e) {
        return false
      }
    },

    /**
     * Check Security Status
     */
    async securityStatus () {
      return await domoticzApi.command({ param: 'getsecstatus' })
    },

    /**
     * Get various informations about the Domoticz Server
     */
    async version () {
      return await domoticzApi.command({ param: 'getversion' })
    },

    /**
     * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server
     */
    async datetimes () {
      return await domoticzApi.command({ param: 'getSunRiseSet' })
    },

    /**
     * Reboot Domoticz Server
     */
    async reboot () {
      return await domoticzApi.command({ param: 'system_reboot' })
    },

    /**
     * Shutdown the Domoticz Server
     */
    async shutdown () {
      return await domoticzApi.command({ param: 'system_shutdown' })
    },

    /**
     * Start Database backup
     */
    async db_backup () {
      return await domoticzApi.get('backupdatabase.php')
    },

    /**
     * Execute database cleanup
     */
    async db_vaccum () {
      return await domoticzApi.command({ param: 'vaccumdatabase' })
    }
  }
}

export { useSystem }
