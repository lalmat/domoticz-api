import { IdzCamera } from '../types/IdzCamera'
import { DomoticzApiConnector } from '../index'

class CameraManager {
  domoticzApi: DomoticzApiConnector

  constructor (domoticzApi: DomoticzApiConnector) {
    this.domoticzApi = domoticzApi
  }

  /**
   * Get all cameras informations
   */
  async items (): Promise<IdzCamera[] | undefined> {
    const data = await this.domoticzApi.cameras()
    return data.result
  }
}

export {
  CameraManager
}
