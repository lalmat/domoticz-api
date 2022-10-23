import { DOMOTICZ_DEVICE } from '../../enums/Domoticz'

export interface IDevicesOptions {
  // type: String
  rid?: Number
  filter?: DOMOTICZ_DEVICE
  used?: Boolean
  order?: String
  displayhidden?: Number
  favorite?: Number
}
