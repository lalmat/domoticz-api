import { DOMOTICZ_SWITCHCMD } from '../enums/Domoticz'
import { IdzResult } from '../types/IdzResult'
import { IdzScene } from '../types/IdzScene'
import { DomoticzApiConnector } from '../connectors/DomoticzApiConnector'
import { DOMOTICZ_COMMAND_PARAM } from '../enums/DomoticzCommandParam'

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
   * @param {DOMOTICZ_SWITCHCMD} command : string of the state, ex: 'Off'
   */
  async switch (idx: number, command: DOMOTICZ_SWITCHCMD): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({
      param     : DOMOTICZ_COMMAND_PARAM.SWITCH,
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
    return await this.switch(idx, DOMOTICZ_SWITCHCMD.TOGGLE)
  }
}

export { SceneManager }
