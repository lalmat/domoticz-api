import { CameraManager } from '../domoticz/CameraManager'
import { DeviceManager } from '../domoticz/DeviceManager'
import { EventManager } from '../domoticz/EventManager'
import { NotificationManager } from '../domoticz/NotificationManager'
import { SceneManager } from '../domoticz/SceneManager'
import { SystemManager } from '../domoticz/SystemManager'

export interface IDomoticzApi {
  cameraManager: CameraManager
  deviceManager: DeviceManager
  eventManager: EventManager
  sceneManager: SceneManager
  systemManager: SystemManager
  notificationManager: NotificationManager
}
