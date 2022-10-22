import {
  LOG_LEVEL_ERROR,
  LOG_LEVEL_NORMAL,
  LOG_LEVEL_STATUS
} from './ILogLevels'

export interface IGetLogOptions {
  type: 'command'
  param: 'addlogmessage'
  message: String
  level: LOG_LEVEL_ERROR | LOG_LEVEL_NORMAL | LOG_LEVEL_STATUS
}
