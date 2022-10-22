import { DomoticzApiProvider } from 'index'
import { CameraResult, Camera } from './DomoticzCamera'

function useCameras (domoticzApi: DomoticzApiProvider): Object {
  return {
    /**
     * Get all cameras informations
     */
    async items (): Promise<Camera[]> {
      const data = await domoticzApi.cameras()
      return data.result
    }
  }
}

export { useCameras }
