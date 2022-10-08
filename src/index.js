import { DomoticzApiProviderFetch } from "./providers/DomoticzApiProviderFetch.js"

import Cameras      from "./CamerasContoller.js"
import Devices      from "./DevicesController.js"
import Events       from "./EventsController.js"
import Scenes       from "./ScenesController.js"
import Notification from "./NotificationController.js"
import System       from "./SystemController.js"


export class DomoticzApi {

  constructor(hostname, options) {
    this.api          = new DomoticzApiProviderFetch(hostname, options)

    this.cameras      = new Cameras(this.api)
    this.devices      = new Devices(this.api)
    this.events       = new Events(this.api)
    this.scenes       = new Scenes(this.api)
    this.notification = new Notification(this.api)
    this.system       = new System(this.api)
  }
}
