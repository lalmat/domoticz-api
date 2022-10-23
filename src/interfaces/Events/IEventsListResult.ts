import { IEventsListRecord } from './IEventsListRecord'
export interface IEventsListResult {
  interpreters: string
  result: IEventsListRecord[]
  status: string
  title: 'ListEvents'
}
