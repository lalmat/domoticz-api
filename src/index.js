import Axios from "axios";

class API {

    constructor(hostname, options) {
        this.devices = {};

        this.useSSL = options.useSSL ? options.useSSL : false;

        this.domoticzUrl  = this.useSSL ? "https://" : "http://";
        this.domoticzUrl += hostname;

        if (options.port) {
            this.domoticzUrl += `:${options.port}`;
        }

        this.domoticzUrl += "/json.htm?_connector=domoticz-api";

        if (options.username && options.password) {
            this.domoticzUrl += `&username=${btoa(options.username)}`;
            this.domoticzUrl += `&password=${btoa(options.password)}`;
        }

        this.domoticzUrl += "&";
    }

    async version() {
        let uri = "type=command&param=getversion";
        return await this.domoticzCall(uri);
    }

    async log(message) {
        message = "----------- DOMOTICZ API -----------> " + message;
        let uri = `type=command&param=addlogmessage&message=${encodeURI(message)}`;
        return await this.domoticzCall(uri);
    }

    async domoticzCall(order) {
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

export {
    API
};