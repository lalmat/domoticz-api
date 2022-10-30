import { IDomoticzApi } from './IDomoticzApi'

import { DomoticzApiConnector } from './connectors/DomoticzApiConnector'
import type { DomoticzApiOptions } from './connectors/DomoticzApiConnector'
import { DomoticzApiFetch } from './connectors/DomoticzApiFetch'

import { DeviceManager } from './domoticz/DeviceManager'
import { CameraManager } from './domoticz/CameraManager'
import { EventManager } from './domoticz/EventManager'
import { SceneManager } from './domoticz/SceneManager'
import { NotificationManager } from './domoticz/NotificationManager'
import { SystemManager } from './domoticz/SystemManager'

function useDomoticzApi (options: DomoticzApiOptions): IDomoticzApi {
  const domoticzApi = (options.DomoticzApi === undefined)
    ? new DomoticzApiFetch(options)
    : new options.DomoticzApi(options)

  return {
    cameraManager       : new CameraManager(domoticzApi),
    deviceManager       : new DeviceManager(domoticzApi),
    eventManager        : new EventManager(domoticzApi),
    notificationManager : new NotificationManager(domoticzApi),
    sceneManager        : new SceneManager(domoticzApi),
    systemManager       : new SystemManager(domoticzApi)
  }
}

export {
  useDomoticzApi,

  DomoticzApiOptions,
  DomoticzApiConnector,

  DeviceManager,
  CameraManager,
  EventManager,
  NotificationManager,
  SceneManager,
  SystemManager
}
