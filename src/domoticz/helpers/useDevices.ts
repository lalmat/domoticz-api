import { DEVICE_HUMIDITY_GENERAL_TYPE, DEVICE_HUMIDITY_TYPE, HUMIDITY_TYPE } from './../interfaces/Types/IDeviceHumidityTypes'
import { IDeviceRecord } from './../interfaces/Devices/IDeviceRecord'
import { DEVICE_TYPE } from './../interfaces/Types/IDeviceTypes'
import { DomoticzApiProvider } from 'index'
import { IGenericResult } from 'domoticz/interfaces/IGenericResult'

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
     * @param {DEVICE_TYPE} filter
     * @param {String} orderBy
     */
    async getByType (filter: DEVICE_TYPE, orderBy: String = 'Name'): Promise<IDeviceRecord[]> {
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
        filter   : 'all',
        favorite : 1
      })
      return devices.result
    },

    /**
     * Ask Domoticz to action a Light/Switch
     * @param {Number} idx
     * @param {String} command "On|Off"
     */
    async switch (idx: Number, command: String = 'On'): Promise<IGenericResult> {
      return await domoticzApi.command({
        param     : 'switchlight',
        idx,
        switchcmd : command.toLowerCase() === 'on' ? 'On' : 'Off'
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
        switchcmd : 'Toggle'
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
     * @param {HUMIDITY_TYPE} humidityState [0: Normal, 1: Confortable, 2: Dry, 3: Wet]
     * @returns
     */
    async updateHumidity (idx: Number, humidityPercent: Number, humidityState: HUMIDITY_TYPE): Promise<IGenericResult | null> {
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
    async updateBarometer (idx: Number, barometer: Number, deviceHumidityType: DEVICE_HUMIDITY_GENERAL_TYPE | DEVICE_HUMIDITY_TYPE): Promise<IGenericResult> {
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
