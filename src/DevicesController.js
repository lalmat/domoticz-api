export default class {

  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Get all devices, including the hidden ones
   */
  async get() {
    let uri = "type=devices&used=true&displayhidden=1";
    let response = await this.api.send(uri);
    return response.result;
  }

  /**
   * Get a specific device
   * @param {integer} idx
   */
  async getByIdx(idx) {
    let uri = `type=devices&rid=${idx}`;
    return await this.api.send(uri);
  }

  /**
   * Retrieve devices of a specific type
   * @param {string} filter "light|weather|temp|utility|wind|rain|uv|baro|zwavealarms|all"
   * @param {string} orderBy
   */
  async getByType(filter, orderBy="Name") {
    let allowed = [
      "light",
      "weather",
      "temp",
      "utility",
      "wind",
      "rain",
      "uv",
      "baro",
      "zwavealarms",
      "all"
    ].indexOf(filter) !== false;
    if (!allowed) return false;

    let uri = `type=devices&filter=${filter}&used=true&order=${orderBy}`;
    let response = await this.api.send(uri);
    return response.result;
  }

  /**
   * Return favorites devices
   */
  async getFavorites() {
    let uri = "type=devices&used=true&filter=all&favorite=1";
    let response = await this.api.send(uri);
    return response.result;
  }

  /**
   * Ask Domoticz to action a Light/Switch
   * @param {integer} idx
   * @param {string} command "On|Off"
   */
  async switch(idx, command="On") {
    let uri = `type=command&param=switchlight&idx=${idx}&switchcmd=${command}`;
    return await this.api.send(uri);
  }

  /**
   * Ask Domoticz to toggle a Light/Switch
   * @param {integer} idx
   */
  async toggle(idx) {
    this.switch(idx, "Toggle");
  }

  /**
   * Rename the device identified by idx
   * @param {int} idx
   * @param {string} newName
   */
   async rename(idx, newName) {
    let uri = `type=command&param=renamedevice&name=${newName}&idx=${idx}`
    let response = await this.api.send(uri);
    return response.result;
  }

  /**
   * Set/Remove the protection on a device identified by idx
   * @param {boolean} state
   */
  async setProtection(state="true") {
    let uri = `type=setused&used=true&protected=${state?'true':'false'}&idx=${idx}`
    let response = await this.api.send(uri);
    return response.result;
  }

  /**
   * Set the new temperature
   *
   * @param {int} idx
   * @param {int} temperature
   * @returns
   */
  async updateTemperature(idx, temperature)
  {
    return await this.updateDevice(idx, temperature);
  }

  /**
   * Set the humidity datas of a device
   *
   * @param {int} idx Domoticz Device ID
   * @param {string} humidityPercent  Ex: 45%
   * @param {string} humidityState [0: Normal, 1: Confortable, 2: Dry, 3: Wet]
   * @returns
   */
  async updateHumidity(idx, humidityPercent, humidityState)
  {
    if (humidityPercent < 0 || humidityPercent > 100) return null;
    if (humidityState < 0 || humidityState > 5) return null;
    return await this.updateDevice(idx, humidityState, humidityPercent);
  }

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
  async updateBarometer(idx, barometer, barometerForecast)
  {
    if (humidityState < 0 || humidityState > 9) return null;
    let baroData = barometer+";"+barometerForecast
    return await this.updateDevice(idx, baroData);
  }

  /**
   * Generic update of a devices
   *
   * @param {int} idx
   * @param {*} sValue
   * @param {*} nValue
   * @returns
   */
  async updateDevice(idx, sValue, nValue = 0)
  {
    let uri = `type=command&param=udevice&idx=${idx}&nvalue=${nValue}&svalue=${sValue}`
    let response = await this.api.send(uri);
    return response.result;
  }

}
