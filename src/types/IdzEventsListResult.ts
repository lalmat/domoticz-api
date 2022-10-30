import { IdzEventsListItem } from './IdzEventsListItem'
import { IdzResult } from './IdzResult'
export interface IdzEventsListResult extends IdzResult<IdzEventsListItem> {
  interpreters: string
}
