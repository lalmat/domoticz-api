import { DOMOTICZ_LOG_LEVEL } from '../../enums/Domoticz'

export interface IGetLogOptions {
  type: 'command'
  param: 'addlogmessage'
  message: String
  level: DOMOTICZ_LOG_LEVEL
}
