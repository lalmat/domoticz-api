import { DomoticzApiProvider } from './DomoticzApiProvider';
declare class DomoticzApiProviderFetch extends DomoticzApiProvider {
    __generic(method: string, endpoint: string, data?: Object, content?: string): Promise<Object>;
}
export { DomoticzApiProviderFetch };
