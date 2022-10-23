import { DOMOTICZ_LOG_LEVEL } from '../../enums/Domoticz'

export interface ILogRecord {
  level: DOMOTICZ_LOG_LEVEL
  message: String
}
