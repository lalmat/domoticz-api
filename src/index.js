import Api from "./Api";

import Cameras      from "./CamerasContoller";
import Devices      from "./DevicesController";
import Events       from "./EventsController";
import GroupSwitch  from "./GroupSwitchController";
import LightSwitch  from "./LightSwitchController";
import Notification from "./NotificationController";
import System       from "./SystemController";


export class DomoticzApi {

    constructor(hostname, options) {
        this.api          = new Api(hostname,options);
        this.cameras      = new Cameras(this.api);
        this.devices      = new Devices(this.api);
        this.events       = new Events(this.api);
        this.groupSwitch  = new GroupSwitch(this.api);
        this.lightSwitch  = new LightSwitch(this.api);
        this.notification = new Notification(this.api);
        this.system       = new System(this.api);
    }
}