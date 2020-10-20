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
            this.domoticzUrl += `&username=${btoa(options.username)}`;
            this.domoticzUrl += `&password=${btoa(options.password)}`;
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
}