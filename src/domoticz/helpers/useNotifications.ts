import { ICommandOptions } from './../interfaces/Command/ICommandOptions'
import { NOTIFICATION_TYPE } from 'domoticz/interfaces/Types/INotificationSystem'
import { DomoticzApiProvider } from 'index'

function useNotifications (domoticzApi: DomoticzApiProvider): any {
  return {
    /**
     * Send a notification through Domoticz Notification API
     * @param {string} subject
     * @param {string} message
     * @param {notificationType} subSystem
     */
    async send (subject: String, message: String, subSystem?: NOTIFICATION_TYPE) {
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
