import {
  LOG_LEVEL_ALL,
  LOG_LEVEL_ERROR,
  LOG_LEVEL_NORMAL,
  LOG_LEVEL_STATUS
} from './Log/ILogLevels'

export interface IGetLogOptions {
  type: 'command'
  param: 'getlog'
  lastlogtime: String
  loglevel: LOG_LEVEL_ALL | LOG_LEVEL_ERROR | LOG_LEVEL_NORMAL | LOG_LEVEL_STATUS
}
