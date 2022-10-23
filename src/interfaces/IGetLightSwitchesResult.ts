import { IGetLightSwitchesRecord } from './IGetLightSwitchesRecord'
export interface IGetLightSwitchesResult {
  result: IGetLightSwitchesRecord[]
  status: 'OK' | 'ERR'
  title: 'GetLightSwitches'
}
