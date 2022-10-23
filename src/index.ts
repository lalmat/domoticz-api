import { DomoticzApiProvider } from './providers/DomoticzApiProvider'
import type { DomoticzOptions } from './providers/DomoticzApiProvider'
import { DomoticzApiProviderFetch } from './providers/DomoticzApiProviderFetch'
import { useDevices } from './domoticz/useDevices'
import { useCameras } from './domoticz/useCameras'
import { useEvents } from './domoticz/useEvents'
import { useScenes } from './domoticz/useScenes'
import { useNotifications } from './domoticz/useNotifications'
import { useSystem } from './domoticz/useSystem'
import {
  DOMOTICZ_LOG_LEVEL,
  DOMOTICZ_DAY,
  DOMOTICZ_DEVICE,
  DOMOTICZ_DEVICE_HUMIDITY,
  DOMOTICZ_HUMIDITY,
  DOMOTICZ_NOTIFICATOR,
  DOMOTICZ_SUBTYPE,
  DOMOTICZ_SWITCHCMD,
  DOMOTICZ_TIMER_TYPE
} from './enums/Domoticz'

function useDomoticz (options: DomoticzOptions): any {
  const domoticzApi = (options.DomoticzApi != null)
    ? new options.DomoticzApi(options)
    : new DomoticzApiProviderFetch(options)

  return {
    cameraManager       : useCameras(domoticzApi),
    deviceManager       : useDevices(domoticzApi),
    eventManager        : useEvents(domoticzApi),
    notificationManager : useNotifications(domoticzApi),
    sceneManager        : useScenes(domoticzApi),
    systemManager       : useSystem(domoticzApi)
  }
}

export {
  useDomoticz,
  DomoticzOptions,
  DomoticzApiProvider,
  DomoticzApiProviderFetch,
  useDevices,
  useCameras,
  useEvents,
  useNotifications,
  useScenes,
  useSystem,

  DOMOTICZ_LOG_LEVEL,
  DOMOTICZ_DAY,
  DOMOTICZ_DEVICE,
  DOMOTICZ_DEVICE_HUMIDITY,
  DOMOTICZ_HUMIDITY,
  DOMOTICZ_NOTIFICATOR,
  DOMOTICZ_SUBTYPE,
  DOMOTICZ_SWITCHCMD,
  DOMOTICZ_TIMER_TYPE
}
