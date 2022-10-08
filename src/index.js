import { DomoticzApiProviderFetch } from "./providers/DomoticzApiProviderFetch.js";
import { deviceTypes, useDevices } from "./DomoticzDevices.js";
import Cameras from "./CamerasContoller.js";
import Events from "./EventsController.js";
import Scenes from "./ScenesController.js";
import Notification from "./NotificationController.js";
import System from "./SystemController.js";

class DomoticzApi {
  constructor(hostname, options) {
    const domoticzApi = new DomoticzApiProviderFetch(hostname, options);
    this.devices = useDevices(domoticzApi);

    this.cameras = new Cameras(domoticzApi);
    this.events = new Events(domoticzApi);
    this.scenes = new Scenes(domoticzApi);
    this.notification = new Notification(domoticzApi);
    this.system = new System(domoticzApi);
  }
}

export { DomoticzApi, DomoticzApiProviderFetch, deviceTypes, useDevices };
