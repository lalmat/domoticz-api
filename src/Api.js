import Axios from "axios";

export default class {


  constructor(hostname, options) {

    this.domoticzUrl  = options.useSSL ? "https://" : "http://";
    this.domoticzUrl += hostname;

    if (options?.port) {
      this.domoticzUrl += `:${options.port}`;
    }

    this.domoticzUrl += "/json.htm?_connector=domoticz-api";

    if (options?.username && options?.password) {
      let isBrowser = this.window === this;
      let base64_username = isBrowser ? Buffer.from(options.username, 'base64') : btoa(options.username);
      let base64_password = isBrowser ? Buffer.from(options.username, 'base64') : btoa(options.password);

      this.domoticzUrl += `&username=${base64_username}&password=${base64_password}`;
    }

    this.domoticzUrl += "&";
  }

  /**
     * Generic API call
     * @param {string} order
     */
  async send(order) {
    try {
      let result = await Axios.get(this.domoticzUrl+order);
      if (result.data.status === "OK") return result.data;
      return null;
    }
    catch (e) {
      console.log("Domotiz API Query Error: ", e);
    }
  }

  /**
     * Generic API call
     * @param {string} order
     */
  async url(url) {
    try {
      return await Axios.get(url);
    }
    catch (e) {
      console.log("Domotiz API URL Error: ", e);
    }
  }
}
