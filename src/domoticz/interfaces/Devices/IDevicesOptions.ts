import {
  DEVICE_WEATHER,
  DEVICE_TEMP,
  DEVICE_UTILITY,
  DEVICE_ALL,
  DEVICE_BARO,
  DEVICE_LIGHT,
  DEVICE_WIND,
  DEVICE_UV,
  DEVICE_RAIN,
  DEVICE_ZWAVEALARM
} from './IDeviceTypes'

export interface IDeviceOptions {
  type: 'devices'
  rid: String
  filter: DEVICE_LIGHT | DEVICE_WEATHER | DEVICE_TEMP | DEVICE_UTILITY | DEVICE_WIND | DEVICE_RAIN | DEVICE_UV | DEVICE_BARO | DEVICE_ZWAVEALARM | DEVICE_ALL
  used: Boolean
  order: String
  displayhidden: Number
  favorite: Number
}
