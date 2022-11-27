import { DomoticzApiConnector } from '../index'
import {
  EDZ_COMMAND_PARAM,
  EDZ_NOTIFICATOR,
  IdzResult,
  IdzCommandOptions
} from '../types'

class NotificationManager {
  domoticzApi: DomoticzApiConnector

  constructor (domoticzApi: DomoticzApiConnector) {
    this.domoticzApi = domoticzApi
  }

  /**
     * Send a notification through Domoticz Notification API
     * @param {string} subject
     * @param {string} message
     * @param {notificationType[]} subSystems
     */
  async send (subject: string, message: string, subSystems?: EDZ_NOTIFICATOR[]): Promise<IdzResult<null>> {
    const options: IdzCommandOptions = {
      param : EDZ_COMMAND_PARAM.SEND_NOTIFICATION,
      subject,
      body  : message
    }

    if ((subSystems != null) && subSystems.length > 0) {
      options.subsystem = subSystems.reduce((str, item) => str + ((str !== '') ? ';' : '') + item.toString(), '')
    }

    return await this.domoticzApi.command(options)
  }
}

export {
  NotificationManager
}
