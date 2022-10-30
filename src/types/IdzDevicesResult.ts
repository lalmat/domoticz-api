import { IdzResult } from './IdzResult'
import { IdzDevice } from './IdzDevice'

export interface IdzDevicesResult extends IdzResult<IdzDevice> {
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
}
