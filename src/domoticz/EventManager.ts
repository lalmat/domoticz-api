import { IdzEventsListItem } from '../types/IdzEventsListItem'
import { DomoticzApiConnector } from '../connectors/DomoticzApiConnector'
import { IdzEventsListResult } from '../types/IdzEventsListResult'

class EventManager {
  domoticzApi: DomoticzApiConnector

  constructor (domoticzApi: DomoticzApiConnector) {
    this.domoticzApi = domoticzApi
  }

  /**
   * Retrieve all Domoticz Events
   */
  async items (): Promise<IdzEventsListItem[]> {
    const events = await this.domoticzApi.events({ param: 'list' }) as IdzEventsListResult
    if (((events?.result) != null) && events.result !== undefined) { return events.result }
    return []
  }
}

export {
  EventManager
}
