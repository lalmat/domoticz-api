import { IDeviceListRecord } from './IDeviceListRecord';
export interface IDeviceListResult {
    result: IDeviceListRecord[];
    status: String;
    title: 'GetDevicesList';
}
