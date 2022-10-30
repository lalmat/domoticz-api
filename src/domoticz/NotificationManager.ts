import { IdzResult } from '../types/IdzResult'
import { IdzCommandOptions } from '../types/IdzCommandOptions'
import { DomoticzApiConnector } from '../index'

import { DOMOTICZ_COMMAND_PARAM } from '../enums/DomoticzCommandParam'
import { DOMOTICZ_NOTIFICATOR } from '../enums/Domoticz'

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
  async send (subject: string, message: string, subSystems?: DOMOTICZ_NOTIFICATOR[]): Promise<IdzResult<null>> {
    const options: IdzCommandOptions = {
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
