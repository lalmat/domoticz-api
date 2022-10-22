import { DEVICE_TYPE } from '../Types/IDeviceTypes'

export interface IDevicesOptions {
  // type: String
  rid?: Number
  filter?: DEVICE_TYPE
  used?: Boolean
  order?: String
  displayhidden?: Number
  favorite?: Number
}
