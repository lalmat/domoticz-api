import { DOMOTICZ_SWITCHCMD } from '../enums/Domoticz'
import { IGenericResult } from '../interfaces/IGenericResult'
import { ISceneRecord } from '../interfaces/Scenes/ISceneRecord'
import { DomoticzApiProvider } from '../index'
function useScenes (domoticzApi: DomoticzApiProvider): any {
  return {
    /**
     * Get all the Domoticz"s scenes
     */
    async items (): Promise<ISceneRecord[]> {
      const scenes = await domoticzApi.scenes()
      return scenes.result
    },

    /**
     * Switch a state into a specific state
     *
     * @param {Number} idx : Domoticz index of the device
     * @param {String} command : string of the state, ex: 'Off'
     */
    async switch  (idx: Number, command: DOMOTICZ_SWITCHCMD): Promise<IGenericResult> {
      return await domoticzApi.command({
        param     : 'switch',
        idx,
        switchcmd : command
      }) as IGenericResult
    },

    /**
     * Toggle a device (ex: On/Off
     *
     * @param {Number} idx : Domoticz index of the device
     */
    async toggle (idx: Number): Promise<IGenericResult> {
      return await this.switch(idx, 'Toggle') as IGenericResult
    }
  }
}
export { useScenes }
