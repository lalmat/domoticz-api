import { DomoticzApiProvider } from "./providers/DomoticzApiProvider.js";
import { DomoticzApiProviderFetch } from "./providers/DomoticzApiProviderFetch.js";
import {
  deviceTypes,
  deviceHumidityTypes,
  deviceHumidityGeneralTypes,
  useDevices,
} from "./domoticz/devices.js";
import { useCameras } from "./domoticz/cameras.js";
import { useEvents } from "./domoticz/events.js";
import { useScenes } from "./domoticz/scenes.js";
import {
  notificationTypes,
  useNotifications,
} from "./domoticz/notifications.js";
import { useSystem } from "./domoticz/system.js";

function Domoticz(hostname, options) {
  const domoticzApi = options?.api
    ? new options.api(hostname, options)
    : new DomoticzApiProviderFetch(hostname, options);
  return {
    cameraManager: useCameras(domoticzApi),
    deviceManager: useDevices(domoticzApi),
    eventManager: useEvents(domoticzApi),
    notificationManager: useNotifications(domoticzApi),
    sceneManager: useScenes(domoticzApi),
    systemManager: useSystem(domoticzApi),
  };
}

export {
  Domoticz,
  DomoticzApiProvider,
  DomoticzApiProviderFetch,
  deviceTypes,
  deviceHumidityTypes,
  deviceHumidityGeneralTypes,
  notificationTypes,
  useDevices,
  useCameras,
  useEvents,
  useNotifications,
  useScenes,
  useSystem,
};
