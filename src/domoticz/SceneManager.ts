import { DOMOTICZ_SWITCHCMD } from '../enums/Domoticz'
import { IGenericResult } from '../interfaces/IGenericResult'
import { ISceneRecord } from '../interfaces/Scenes/ISceneRecord'
import { DomoticzApiProvider } from '../index'
import { DOMOTICZ_COMMAND_PARAM } from '../enums/DomoticzCommandParam'

class SceneManager {
  domoticzApi: DomoticzApiProvider

  constructor (domoticzApi: DomoticzApiProvider) {
    this.domoticzApi = domoticzApi
  }

  /**
   * Get all the Domoticz"s scenes
   */
  async items (): Promise<ISceneRecord[]> {
    const scenes = await this.domoticzApi.scenes()
    return scenes.result
  }

  /**
   * Switch a state into a specific state
   *
   * @param {number} idx : Domoticz index of the device
   * @param {DOMOTICZ_SWITCHCMD} command : string of the state, ex: 'Off'
   */
  async switch (idx: number, command: DOMOTICZ_SWITCHCMD): Promise<IGenericResult> {
    return await this.domoticzApi.command({
      param     : DOMOTICZ_COMMAND_PARAM.SWITCH,
      idx,
      switchcmd : command
    }) as IGenericResult
  }

  /**
   * Toggle a device (ex: On/Off
   *
   * @param {number} idx : Domoticz index of the device
   */
  async toggle (idx: number): Promise<IGenericResult> {
    return await this.switch(idx, DOMOTICZ_SWITCHCMD.TOGGLE)
  }
}

export { SceneManager }
