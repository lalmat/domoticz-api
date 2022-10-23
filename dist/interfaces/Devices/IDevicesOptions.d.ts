import { DOMOTICZ_DEVICE } from '../../enums/Domoticz';
export interface IDevicesOptions {
    rid?: Number;
    filter?: DOMOTICZ_DEVICE;
    used?: Boolean;
    order?: String;
    displayhidden?: Number;
    favorite?: Number;
}
