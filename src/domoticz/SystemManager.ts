import { IdzSunRiseSetResult } from '../types/IdzSunRiseSetResult'
import { IdzVersionResult } from '../types/IdzVersionResult'
import { DomoticzApiConnector } from '../connectors/DomoticzApiConnector'
import { IdzResult } from '../types/IdzResult'
import { DOMOTICZ_COMMAND_PARAM } from '../enums/DomoticzCommandParam'

class SystemManager {
  domoticzApi: DomoticzApiConnector

  constructor (domoticzApi: DomoticzApiConnector) {
    this.domoticzApi = domoticzApi
  }

  /**
   * Write a message into Domoticz Logs
   * @param {String} message
   */
  async log (message: string): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({
      param   : DOMOTICZ_COMMAND_PARAM.ADD_LOG_MESSAGE,
      message : `DOMOTICZ API : ${message}`
    })
  }

  /**
   * Check Credentials
   */
  async checkCredentials (): Promise<Boolean> {
    try {
      await this.domoticzApi.checkCredentials()
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * Check Security Status
   */
  async securityStatus (): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.GET_SECURITY_STATUS })
  }

  /**
   * Get various informations about the Domoticz Server
   */
  async version (): Promise<IdzVersionResult> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.GET_VERSION })
  }

  /**
   * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server
   */
  async datetimes (): Promise<IdzSunRiseSetResult> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.GET_SUNRISE_SUNSET })
  }

  /**
   * Reboot Domoticz Server
   */
  async reboot (): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.SYSTEM_REBOOT })
  }

  /**
   * Shutdown the Domoticz Server
   */
  async shutdown (): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.SYSTEM_SHUTDOWN })
  }

  /**
   * Start Database backup
   */
  async db_backup (): Promise<IdzResult<null>> {
    return await this.domoticzApi.get('backupdatabase.php')
  }

  /**
   * Execute database cleanup
   */
  async db_vaccum (): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.VACCUM_DATABASE })
  }
}

export { SystemManager }
