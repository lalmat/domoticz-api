import { DOMOTICZ_LOG_LEVEL } from '../enums/Domoticz'

export interface IdzLog {
  level: DOMOTICZ_LOG_LEVEL
  message: String
}
