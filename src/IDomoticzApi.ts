import type { CameraManager } from './domoticz/CameraManager'
import type { DeviceManager } from './domoticz/DeviceManager'
import type { EventManager } from './domoticz/EventManager'
import type { NotificationManager } from './domoticz/NotificationManager'
import type { SceneManager } from './domoticz/SceneManager'
import type { SystemManager } from './domoticz/SystemManager'

export interface IDomoticzApi {
  cameraManager: CameraManager
  deviceManager: DeviceManager
  eventManager: EventManager
  sceneManager: SceneManager
  systemManager: SystemManager
  notificationManager: NotificationManager
}
