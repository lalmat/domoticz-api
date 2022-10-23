import { DOMOTICZ_DEVICE_HUMIDITY, DOMOTICZ_HUMIDITY, DOMOTICZ_DEVICE, DOMOTICZ_SWITCHCMD } from '../enums/Domoticz'
import { IDeviceRecord } from '../interfaces/Devices/IDeviceRecord'
import { DomoticzApiProvider } from '../index'
import { IGenericResult } from '../interfaces/IGenericResult'

function useDevices (domoticzApi: DomoticzApiProvider): any {
  return {
    /**
     * Get all devices, including the hidden ones
     */
    async items (): Promise<IDeviceRecord[]> {
      const devices = await domoticzApi.devices({
        used          : true,
        displayhidden : 1
      })
      return devices.result
    },

    /**
     * Get a specific device
     * @param {number} idx
     */
    async getByIdx (idx: Number): Promise<IDeviceRecord> {
      const device = await domoticzApi.devices({
        rid : idx
      })
      return device.result[0]
    },

    /**
     * Retrieve devices of a specific type
     * @param {DOMOTICZ_DEVICE} filter
     * @param {String} orderBy
     */
    async getByType (filter: DOMOTICZ_DEVICE, orderBy: String = 'Name'): Promise<IDeviceRecord[]> {
      const devices = await domoticzApi.devices({
        filter,
        used  : true,
        order : orderBy
      })
      return devices.result
    },

    /**
     * Return favorites devices
     */
    async getFavorites (): Promise<IDeviceRecord[]> {
      const devices = await domoticzApi.devices({
        used     : true,
        filter   : DOMOTICZ_DEVICE.ALL,
        favorite : 1
      })
      return devices.result
    },

    /**
     * Ask Domoticz to action a Light/Switch
     * @param {Number} idx
     * @param {DOMOTICZ_SWITCHCMD} command "On|Off"
     */
    async switch (idx: Number, command: DOMOTICZ_SWITCHCMD = DOMOTICZ_SWITCHCMD.ON): Promise<IGenericResult> {
      return await domoticzApi.command({
        param     : 'switchlight',
        idx,
        switchcmd : command
      }) as IGenericResult
    },

    /**
     * Ask Domoticz to toggle a Light/Switch
     * @param {integer} idx
     */
    async toggle (idx: Number): Promise<IGenericResult> {
      return await domoticzApi.command({
        param     : 'switchlight',
        idx,
        switchcmd : DOMOTICZ_SWITCHCMD.TOGGLE
      }) as IGenericResult
    },

    /**
     * Rename the device identified by idx
     * @param {Number} idx
     * @param {String} name
     */
    async rename (idx: Number, name: String): Promise<IGenericResult> {
      return await domoticzApi.command({
        param : 'renamedevice',
        idx,
        name
      }) as IGenericResult
    },

    /**
     * Set/Remove the protection on a device identified by idx
     * @param {Number} idx
     * @param {Boolean} enable
     */
    async protect (idx: Number, enable: Boolean = true): Promise<IGenericResult> {
      return await domoticzApi.setUsed({
        used      : true,
        idx,
        protected : enable
      }) as IGenericResult
    },

    /**
     * Set the new temperature
     *
     * @param {Number} idx
     * @param {Number} temperature
     * @returns
     */
    async updateTemperature (idx: Number, temperature: Number): Promise<IGenericResult> {
      return await this.updateDevice(idx, temperature.toString()) as IGenericResult
    },

    /**
     * Set the humidity datas of a device
     *
     * @param {Number} idx Domoticz Device ID
     * @param {String} humidityPercent  Ex: 45
     * @param {DOMOTICZ_HUMIDITY} humidityState [0: Normal, 1: Confortable, 2: Dry, 3: Wet]
     * @returns
     */
    async updateHumidity (idx: Number, humidityPercent: Number, humidityState: DOMOTICZ_HUMIDITY): Promise<IGenericResult | null> {
      if (humidityPercent < 0 || humidityPercent > 100) return null
      if (humidityState < 0 || humidityState > 5) return null
      return await this.updateDevice(idx, humidityState, humidityPercent.toString()) as IGenericResult
    },

    /**
     * Set the barometer pressure and define the barometer forecast.
     *
     * @param {Number} idx
     * @param {int} barometer Atmospheric Pressure
     * @param {deviceHumidityType} deviceHumidityType use a deviceHumidityGeneralType (if device.Type is 'General'), or deviceHumidityType otherwise.
     *
     * @returns
     */
    async updateBarometer (idx: Number, barometer: Number, deviceHumidityType: DOMOTICZ_DEVICE_HUMIDITY): Promise<IGenericResult> {
      return await this.updateDevice(idx, `${barometer.toString()};${deviceHumidityType}`) as IGenericResult
    },

    /**
     * Generic update of a devices
     *
     * @param {Number} idx
     * @param {String} sValue
     * @param {String} nValue
     * @returns
     */
    async updateDevice (idx: Number, svalue: String, nvalue: String = '0'): Promise<IGenericResult> {
      return await domoticzApi.command({
        param : 'udevice',
        idx,
        svalue,
        nvalue
      }) as IGenericResult
    }
  }
}

export {
  useDevices
}
