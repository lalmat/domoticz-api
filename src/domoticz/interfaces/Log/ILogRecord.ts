import {
  LOG_LEVEL_ALL,
  LOG_LEVEL_ERROR,
  LOG_LEVEL_NORMAL,
  LOG_LEVEL_STATUS
} from './ILogLevels'

export interface ILogRecord {
  level: LOG_LEVEL_ALL | LOG_LEVEL_ERROR | LOG_LEVEL_NORMAL | LOG_LEVEL_STATUS
  message: String
}
