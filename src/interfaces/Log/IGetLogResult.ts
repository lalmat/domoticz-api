import { ILogRecord } from './ILogRecord'

export interface IGetLogResult {
  LastLogTime: String
  result: ILogRecord[]
  status: String
  title: 'GetLog'
}
