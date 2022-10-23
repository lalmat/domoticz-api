import { IGetSunRiseSetResult } from '../interfaces/IGetSunRiseSetResult'
import { IGetVersionResult } from '../interfaces/Version/IGetVersionResult'
import { DomoticzApiProvider } from '../index'
import { IGenericResult } from '../interfaces/IGenericResult'
import { DOMOTICZ_COMMAND_PARAM } from '../enums/DomoticzCommandParam'

class SystemManager {
  domoticzApi: DomoticzApiProvider

  constructor (domoticzApi: DomoticzApiProvider) {
    this.domoticzApi = domoticzApi
  }

  /**
   * Write a message into Domoticz Logs
   * @param {String} message
   */
  async log (message: string): Promise<IGenericResult> {
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
  async securityStatus (): Promise<IGenericResult> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.GET_SECURITY_STATUS })
  }

  /**
   * Get various informations about the Domoticz Server
   */
  async version (): Promise<IGetVersionResult> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.GET_VERSION })
  }

  /**
   * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server
   */
  async datetimes (): Promise<IGetSunRiseSetResult> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.GET_SUNRISE_SUNSET })
  }

  /**
   * Reboot Domoticz Server
   */
  async reboot (): Promise<IGenericResult> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.SYSTEM_REBOOT })
  }

  /**
   * Shutdown the Domoticz Server
   */
  async shutdown (): Promise<IGenericResult> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.SYSTEM_SHUTDOWN })
  }

  /**
   * Start Database backup
   */
  async db_backup (): Promise<IGenericResult> {
    return await this.domoticzApi.get('backupdatabase.php')
  }

  /**
   * Execute database cleanup
   */
  async db_vaccum (): Promise<IGenericResult> {
    return await this.domoticzApi.command({ param: DOMOTICZ_COMMAND_PARAM.VACCUM_DATABASE })
  }
}

export { SystemManager }
