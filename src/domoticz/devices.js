const deviceTypes = {
  LIGHT: "light",
  WEATHER: "wheather",
  TEMP: "temp",
  UTILITY: "utility",
  WIND: "wind",
  RAIN: "rain",
  UV: "uv",
  BARO: "baro",
  ZWAVEALARM: "zwavealarm",
  ALL: "all",
};

function isDeviceType(type) {
  const result =
    Object.values(deviceTypes).find((value) => value == type) != undefined;
  if (!result) console.log("DeviceType not found", type);
  return result;
}

function useDevices(domoticzApi) {
  return {
    /**
     * Get all devices, including the hidden ones
     */
    items() {
      return domoticzApi.devices({
        used: true,
        displayhidden: 1,
      });
    },

    /**
     * Get a specific device
     * @param {integer} idx
     */
    getByIdx(idx) {
      return domoticzApi.devices({
        rid: idx,
      });
    },

    /**
     * Retrieve devices of a specific type
     * @param {deviceType} filter
     * @param {string} orderBy
     */
    getByType(filter, orderBy = "Name") {
      if (!isDeviceType(filter)) return false;
      return domoticzApi.devices({
        filter,
        used: true,
        order: orderBy,
      });
    },

    /**
     * Return favorites devices
     */
    getFavorites() {
      return domoticzApi.devices({
        used: true,
        filter: "all",
        favorite: 1,
      });
    },

    /**
     * Ask Domoticz to action a Light/Switch
     * @param {integer} idx
     * @param {string} command "On|Off"
     */
    switch(idx, command = "On") {
      return domoticzApi.command({
        param: "switchlight",
        idx,
        switchcmd: command.toLowerCase() === "on" ? "On" : "Off",
      });
    },

    /**
     * Ask Domoticz to toggle a Light/Switch
     * @param {integer} idx
     */
    toggle(idx) {
      return domoticzApi.command({
        param: "switchlight",
        idx,
        switchcmd: "Toggle",
      });
    },

    /**
     * Rename the device identified by idx
     * @param {int} idx
     * @param {string} name
     */
    rename(idx, name) {
      return domoticzApi.command({
        param: "renamedevice",
        idx,
        name,
      });
    },

    /**
     * Set/Remove the protection on a device identified by idx
     * @param {boolean} state
     */
    protect(idx, state = true) {
      return domoticzApi.setUsed({
        used: true,
        idx,
        protected: state ? "true" : "false",
      });
    },

    /**
     * Set the new temperature
     *
     * @param {int} idx
     * @param {int} temperature
     * @returns
     */
    updateTemperature(idx, temperature) {
      return this.updateDevice(idx, temperature);
    },

    /**
     * Set the humidity datas of a device
     *
     * @param {int} idx Domoticz Device ID
     * @param {string} humidityPercent  Ex: 45%
     * @param {string} humidityState [0: Normal, 1: Confortable, 2: Dry, 3: Wet]
     * @returns
     */
    updateHumidity(idx, humidityPercent, humidityState) {
      if (humidityPercent < 0 || humidityPercent > 100) return null;
      if (humidityState < 0 || humidityState > 5) return null;
      return this.updateDevice(idx, humidityState, humidityPercent);
    },

    /**
     * Set the barometer pressure and define the barometer forecast.
     *
     * @param {int} idx
     * @param {int} barometer Atmospheric Pressure
     * @param {int} barometerForecast see below
     *
     * If the device is a "General" Barometer device, forecast can be one of:
     * 0 = Stable
     * 1 = Sunny
     * 2 = Cloudy
     * 3 = Unstable
     * 4 = Thunderstorm
     * 5 = Unknown
     * 6 = Cloudy/Rain
     *
     * For other device types can be one of:
     * 0 = Heavy Snow
     * 1 = Snow
     * 2 = Heavy Rain
     * 3 = Rain
     * 4 = Cloudy
     * 5 = Some Clouds
     * 6 = Sunny
     * 7 = Unknown
     * 8 = Unstable
     * 9 = Stable
     *
     * @returns
     */
    updateBarometer(idx, barometer, barometerForecast) {
      return this.updateDevice(idx, `${barometer};${barometerForecast}`);
    },

    /**
     * Generic update of a devices
     *
     * @param {int} idx
     * @param {*} sValue
     * @param {*} nValue
     * @returns
     */
    updateDevice(idx, svalue, nvalue = 0) {
      return domoticzApi.command({
        param: "udevice",
        idx,
        svalue,
        nvalue,
      });
    },
  };
}

export { deviceTypes, useDevices };
