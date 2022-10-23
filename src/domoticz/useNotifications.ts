import { ICommandOptions } from '../interfaces/Command/ICommandOptions'
import { DOMOTICZ_NOTIFICATOR } from '../enums/Domoticz'
import { DomoticzApiProvider } from '../index'

function useNotifications (domoticzApi: DomoticzApiProvider): any {
  return {
    /**
     * Send a notification through Domoticz Notification API
     * @param {string} subject
     * @param {string} message
     * @param {notificationType} subSystem
     */
    async send (subject: String, message: String, subSystem?: DOMOTICZ_NOTIFICATOR) {
      const options: ICommandOptions = {
        param : 'sendnotification',
        subject,
        body  : message
      }

      if (subSystem !== undefined) {
        options.subsystem = subSystem
      }

      return await domoticzApi.command(options)
    }
  }
}

export {
  useNotifications
}
