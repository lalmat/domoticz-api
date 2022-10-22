import { DomoticzApiProvider } from 'index'
import { IEventsListResult } from './../interfaces/Events/IEventsListResult'

function useEvents (domoticzApi: DomoticzApiProvider): Object {
  return {
    /**
     * Retrieve all Domoticz Events
     */
    async items (): Promise<IEventsListResult> {
      return await domoticzApi.events({ param: 'list' }) as IEventsListResult
    }
  }
}

export {
  useEvents
}
