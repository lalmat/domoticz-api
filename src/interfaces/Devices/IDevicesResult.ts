import { IDeviceRecord } from './IDeviceRecord'
export interface IDevicesResult {
  ActTime: Number
  AstrTwilightEnd: String
  AstrTwilightStart: String
  CivTwilightEnd: String
  CivTwilightStart: String
  DayLength: String
  NautTwilightEnd: String
  NautTwilightStart: String
  ServerTime: String
  SunAtSouth: String
  Sunrise: String
  Sunset: String
  app_version: String
  result: IDeviceRecord[]
  status: String
  title: 'Devices'
}
