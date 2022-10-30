import { DOMOTICZ_DEVICE } from '../enums/DomoticzDevice'

export interface IdzRoomDevice {
  DevSceneRowID: number
  Name: string
  devidx: number
  idx: number
  order: number
  type: DOMOTICZ_DEVICE
}
