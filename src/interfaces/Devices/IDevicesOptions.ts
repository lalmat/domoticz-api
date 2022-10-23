import { DOMOTICZ_DEVICE } from '../../enums/Domoticz'

export interface IDevicesOptions {
  // type: String
  rid?: number
  filter?: DOMOTICZ_DEVICE
  used?: boolean
  order?: string
  displayhidden?: number
  favorite?: number
}
