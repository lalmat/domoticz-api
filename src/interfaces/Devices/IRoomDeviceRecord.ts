import { DOMOTICZ_DEVICE } from '../../enums/DomoticzDevice'

export interface IRoomDeviceRecord {
  DevSceneRowID: number
  Name: string
  devidx: number
  idx: number
  order: number
  type: DOMOTICZ_DEVICE
}
