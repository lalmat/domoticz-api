import { EDZ_DEVICE } from './EdzDevice'

export interface IdzDevicesOptions {
  // type: String
  rid?: number
  filter?: EDZ_DEVICE
  used?: boolean
  order?: string
  displayhidden?: number
  favorite?: number
}
