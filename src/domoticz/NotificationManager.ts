import { IGenericResult } from './../interfaces/IGenericResult'
import { ICommandOptions } from '../interfaces/Command/ICommandOptions'
import { DOMOTICZ_NOTIFICATOR } from '../enums/Domoticz'
import { DomoticzApiProvider } from '../index'
import { DOMOTICZ_COMMAND_PARAM } from '../enums/DomoticzCommandParam'

class NotificationManager {
  domoticzApi: DomoticzApiProvider

  constructor (domoticzApi: DomoticzApiProvider) {
    this.domoticzApi = domoticzApi
  }

  /**
     * Send a notification through Domoticz Notification API
     * @param {string} subject
     * @param {string} message
     * @param {notificationType[]} subSystems
     */
  async send (subject: string, message: string, subSystems?: DOMOTICZ_NOTIFICATOR[]): Promise<IGenericResult> {
    const options: ICommandOptions = {
      param : DOMOTICZ_COMMAND_PARAM.SEND_NOTIFICATION,
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
