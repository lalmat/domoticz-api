import { ICameraRecord } from '../interfaces/Cameras/ICameraRecord'
import { DomoticzApiProvider } from 'index'

function useCameras (domoticzApi: DomoticzApiProvider): Object {
  return {
    /**
     * Get all cameras informations
     */
    async items (): Promise<ICameraRecord[]> {
      const data = await domoticzApi.cameras()
      return data.result
    }
  }
}

export {
  useCameras
}
