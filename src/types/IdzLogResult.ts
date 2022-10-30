import { IdzLog } from './IdzLog'
import { IdzResult } from './IdzResult'

export interface IdzLogResult extends IdzResult<IdzLog> {
  LastLogTime: String
}
