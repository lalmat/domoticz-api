import { ISceneResult } from '../interfaces/Scenes/IScenesResult';
import { IEventsOptions } from '../interfaces/Events/IEventsOptions';
import { IDevicesResult } from '../interfaces/Devices/IDevicesResult';
import { IDevicesOptions } from '../interfaces/Devices/IDevicesOptions';
import { ICamerasResult } from '../interfaces/Cameras/ICamerasResult';
import { ICommandOptions } from '../interfaces/Command/ICommandOptions';
export interface DomoticzOptions {
    DomoticzApi?: typeof DomoticzApiProvider;
    hostname: string;
    port?: number;
    username?: string;
    password?: string;
    useSSL?: boolean;
}
export declare class DomoticzApiProvider {
    hostname: string;
    username: string;
    password: string;
    useSSL: Boolean;
    port: Number;
    endpoint: String;
    constructor(options: DomoticzOptions);
    url(uri: string): string;
    cameras(): Promise<ICamerasResult>;
    command(data: ICommandOptions): Promise<Object>;
    devices(data: IDevicesOptions): Promise<IDevicesResult>;
    events(data: IEventsOptions): Promise<Object>;
    notifications(data: Object): Promise<Object>;
    scenes(): Promise<ISceneResult>;
    setUsed(data: Object): Promise<Object>;
    checkCredentials(): Promise<Object>;
    get(uri: string): Promise<Object>;
    domoticz(data: Object): Promise<Object>;
    __generic(method: string, endpoint: string, data?: Object, content?: string): Promise<Object>;
}
