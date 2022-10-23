import { IEventsListRecord } from './IEventsListRecord'
export interface IEventsListResult {
  interpreters: String
  result: IEventsListRecord[]
  status: 'OK' | 'ERR'
  title: 'ListEvents'
}
