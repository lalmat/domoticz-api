import { IDeviceRecord } from './IDeviceRecord'
export interface IDevicesResult {
  ActTime: number
  AstrTwilightEnd: string
  AstrTwilightStart: string
  CivTwilightEnd: string
  CivTwilightStart: string
  DayLength: string
  NautTwilightEnd: string
  NautTwilightStart: string
  ServerTime: string
  SunAtSouth: string
  Sunrise: string
  Sunset: string
  app_version: string
  result: IDeviceRecord[]
  status: string
  title: 'Devices'
}
