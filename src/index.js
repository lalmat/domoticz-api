import Api from "./Api";

import Cameras      from "./CamerasContoller";
import Devices      from "./DevicesController";
import Events       from "./EventsController";
import Scenes       from "./ScenesController";
import Notification from "./NotificationController";
import System       from "./SystemController";


export class DomoticzApi {

    constructor(hostname, options) {
        this.api          = new Api(hostname,options);
        this.cameras      = new Cameras(this.api);
        this.devices      = new Devices(this.api);
        this.events       = new Events(this.api);
        this.scenes       = new Scenes(this.api);
        this.notification = new Notification(this.api);
        this.system       = new System(this.api);
    }
}