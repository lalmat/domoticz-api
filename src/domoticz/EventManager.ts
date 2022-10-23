import { IEventsListRecord } from './../interfaces/Events/IEventsListRecord'
import { DomoticzApiProvider } from '../index'
import { IEventsListResult } from '../interfaces/Events/IEventsListResult'

class EventManager {
  domoticzApi: DomoticzApiProvider

  constructor (domoticzApi: DomoticzApiProvider) {
    this.domoticzApi = domoticzApi
  }

  /**
   * Retrieve all Domoticz Events
   */
  async items (): Promise<IEventsListRecord[]> {
    const result = await this.domoticzApi.events({ param: 'list' }) as IEventsListResult
    return result.result
  }
}

export {
  EventManager
}
