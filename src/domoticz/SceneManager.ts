import { DomoticzApiConnector } from '../connectors/DomoticzApiConnector'
import {
  EDZ_COMMAND_PARAM,
  EDZ_SWITCH_COMMAND,
  IdzResult,
  IdzScene
} from '../types'

class SceneManager {
  domoticzApi: DomoticzApiConnector

  constructor (domoticzApi: DomoticzApiConnector) {
    this.domoticzApi = domoticzApi
  }

  /**
   * Get all the Domoticz"s scenes
   */
  async items (): Promise<IdzScene[]> {
    const scenes = await this.domoticzApi.scenes()
    if (((scenes?.result) != null) && scenes.result !== undefined) { return scenes.result }
    return []
  }

  /**
   * Switch a state into a specific state
   *
   * @param {number} idx : Domoticz index of the device
   * @param {EDZ_SWITCH_COMMAND} command : string of the state, ex: 'Off'
   */
  async switch (idx: number, command: EDZ_SWITCH_COMMAND): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({
      param     : EDZ_COMMAND_PARAM.SWITCH,
      idx,
      switchcmd : command
    })
  }

  /**
   * Toggle a device (ex: On/Off
   *
   * @param {number} idx : Domoticz index of the device
   */
  async toggle (idx: number): Promise<IdzResult<null>> {
    return await this.switch(idx, EDZ_SWITCH_COMMAND.TOGGLE)
  }
}

export { SceneManager }
