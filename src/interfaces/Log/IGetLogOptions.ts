import { DOMOTICZ_LOG_LEVEL } from '../../enums/Domoticz'

export interface IGetLogOptions {
  type: 'command'
  param: 'getlog'
  lastlogtime: String
  loglevel: DOMOTICZ_LOG_LEVEL
}
