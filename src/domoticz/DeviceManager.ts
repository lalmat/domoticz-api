import { DOMOTICZ_DEVICE_HUMIDITY, DOMOTICZ_HUMIDITY, DOMOTICZ_DEVICE, DOMOTICZ_SWITCHCMD } from '../enums/Domoticz'
import { IdzDevice } from '../types/IdzDevice'
import { DomoticzApiConnector } from '../index'
import { IdzResult } from '../types/IdzResult'
import { DOMOTICZ_COMMAND_PARAM } from '../enums/DomoticzCommandParam'

class DeviceManager {
  domoticzApi: DomoticzApiConnector

  constructor (domoticzApi: DomoticzApiConnector) {
    this.domoticzApi = domoticzApi
  }

  /**
     * Get all devices, including the hidden ones
     */
  async items (): Promise<IdzDevice[]> {
    const devices = await this.domoticzApi.devices({
      used          : true,
      displayhidden : 1
    })

    if (((devices?.result) != null) && devices.result !== undefined) { return devices.result }
    return []
  }

  /**
     * Get a specific device
     * @param {number} idx
     */
  async getByIdx (idx: number): Promise<IdzDevice | null> {
    const device = await this.domoticzApi.devices({
      rid : idx
    })
    if (((device?.result) != null) && device.result !== undefined && device.result?.length > 0) { return device.result[0] }
    return null
  }

  /**
     * Retrieve devices of a specific type
     * @param {DOMOTICZ_DEVICE} filter
     * @param {string} orderBy
     */
  async getByType (filter: DOMOTICZ_DEVICE, orderBy: string = 'Name'): Promise<IdzDevice[]> {
    const devices = await this.domoticzApi.devices({
      filter,
      used  : true,
      order : orderBy
    })
    if (((devices?.result) != null) && devices.result !== undefined) { return devices.result }
    return []
  }

  /**
     * Return favorites devices
     */
  async getFavorites (): Promise<IdzDevice[]> {
    const devices = await this.domoticzApi.devices({
      used     : true,
      filter   : DOMOTICZ_DEVICE.ALL,
      favorite : 1
    })
    if (((devices?.result) != null) && devices.result !== undefined) { return devices.result }
    return []
  }

  /**
     * Ask Domoticz to action a Light/Switch
     * @param {number} idx
     * @param {DOMOTICZ_SWITCHCMD} command "On|Off"
     */
  async switch (idx: number, command: DOMOTICZ_SWITCHCMD = DOMOTICZ_SWITCHCMD.ON): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({
      param     : DOMOTICZ_COMMAND_PARAM.SWITCH_LIGHT,
      idx,
      switchcmd : command
    })
  }

  /**
     * Ask Domoticz to toggle a Light/Switch
     * @param {number} idx
     */
  async toggle (idx: number): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({
      param     : DOMOTICZ_COMMAND_PARAM.SWITCH_LIGHT,
      idx,
      switchcmd : DOMOTICZ_SWITCHCMD.TOGGLE
    }) as IdzResult<null>
  }

  /**
     * Rename the device identified by idx
     * @param {number} idx
     * @param {string} name
     */
  async rename (idx: number, name: string): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({
      param : DOMOTICZ_COMMAND_PARAM.RENAME_DEVICE,
      idx,
      name
    }) as IdzResult<null>
  }

  /**
     * Set/Remove the protection on a device identified by idx
     * @param {number} idx
     * @param {boolean} enable
     */
  async protect (idx: number, enable: boolean = true): Promise<IdzResult<null>> {
    return await this.domoticzApi.setUsed({
      used      : true,
      idx,
      protected : enable
    })
  }

  /**
     * Set the new temperature
     *
     * @param {number} idx
     * @param {number} temperature
     * @returns
     */
  async updateTemperature (idx: number, temperature: number): Promise<IdzResult<null>> {
    return await this.updateDevice(idx, temperature.toString())
  }

  /**
     * Set the humidity datas of a device
     *
     * @param {number} idx Domoticz Device ID
     * @param {number} humidityPercent  Ex: 45
     * @param {DOMOTICZ_HUMIDITY} humidityState [0: Normal, 1: Confortable, 2: Dry, 3: Wet]
     * @returns
     */
  async updateHumidity (idx: number, humidityPercent: number, humidityState: DOMOTICZ_HUMIDITY): Promise<IdzResult<null> | null> {
    if (humidityPercent < 0 || humidityPercent > 100) return null
    if (humidityState < 0 || humidityState > 5) return null
    return await this.updateDevice(idx, humidityState.toString(), humidityPercent.toString())
  }

  /**
     * Set the barometer pressure and define the barometer forecast.
     *
     * @param {number} idx
     * @param {int} barometer Atmospheric Pressure
     * @param {deviceHumidityType} deviceHumidityType use a deviceHumidityGeneralType (if device.Type is 'General'), or deviceHumidityType otherwise.
     *
     * @returns
     */
  async updateBarometer (idx: number, barometer: number, deviceHumidityType: DOMOTICZ_DEVICE_HUMIDITY): Promise<IdzResult<null>> {
    return await this.updateDevice(idx, `${barometer.toString()};${deviceHumidityType}`)
  }

  /**
     * Generic update of a devices
     *
     * @param {number} idx
     * @param {string} sValue
     * @param {string} nValue
     * @returns
     */
  async updateDevice (idx: number, svalue: string, nvalue: string = '0'): Promise<IdzResult<null>> {
    return await this.domoticzApi.command({
      param : DOMOTICZ_COMMAND_PARAM.UPDATE_DEVICE,
      idx,
      svalue,
      nvalue
    }) as IdzResult<null>
  }
}

export {
  DeviceManager
}
