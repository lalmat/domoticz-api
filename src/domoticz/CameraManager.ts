import { ICameraRecord } from '../interfaces/Cameras/ICameraRecord'
import { DomoticzApiProvider } from '../index'

class CameraManager {
  domoticzApi: DomoticzApiProvider

  constructor (domoticzApi: DomoticzApiProvider) {
    this.domoticzApi = domoticzApi
  }

  /**
   * Get all cameras informations
   */
  async items (): Promise<ICameraRecord[]> {
    const data = await this.domoticzApi.cameras()
    return data.result
  }
}

export {
  CameraManager
}
