import { IDeviceListRecord } from './IDeviceListRecord'

export interface IDeviceListResult {
  result: IDeviceListRecord[]
  status: string
  title: 'GetDevicesList'
}
