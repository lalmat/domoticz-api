import { IDomoticzApi } from './interfaces/IDomoticzApi'

import { DomoticzApiProvider } from './providers/DomoticzApiProvider'
import type { DomoticzOptions } from './providers/DomoticzApiProvider'
import { DomoticzApiProviderFetch } from './providers/DomoticzApiProviderFetch'

import { DeviceManager } from './domoticz/DeviceManager'
import { CameraManager } from './domoticz/CameraManager'
import { EventManager } from './domoticz/EventManager'
import { SceneManager } from './domoticz/SceneManager'
import { NotificationManager } from './domoticz/NotificationManager'
import { SystemManager } from './domoticz/SystemManager'

function useDomoticzApi (options: DomoticzOptions): IDomoticzApi {
  const domoticzApi = (options.DomoticzApi != null)
    ? new options.DomoticzApi(options)
    : new DomoticzApiProviderFetch(options)

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

  DomoticzApiProvider,
  DomoticzApiProviderFetch,

  DeviceManager,
  CameraManager,
  EventManager,
  NotificationManager,
  SceneManager,
  SystemManager
}
