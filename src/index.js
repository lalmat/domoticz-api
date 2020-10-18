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



    // EVENTS -----------------------------------------------------------------
    async Events_all() {
        let uri = "type=events&param=list";
        return await this.domoticzCall(uri);
    }

    // DEVICES READING --------------------------------------------------------


    /**
     * Get all devices, including the hidden ones
     */
    async Devices_all() {
        let uri = "type=devices&used=true&displayhidden=1";
        let response = await this.domoticzCall(uri);
        return response.result;
    }

    /**
     * Get a specific device
     * @param {integer} idx 
     */
    async Devices_getByIdx(idx) {
        let uri = `type=devices&rid=${idx}`;
        return await this.domoticzCall(uri);
    }

    /**
     * Retrieve devices of a specific type
     * @param {string} filter "light|weather|temp|utility|wind|rain|uv|baro|zwavealarms|all"
     * @param {*} order 
     */
    async Devices_getByType(filter, order="Name") {
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

        let uri = `type=devices&filter=${filter}&used=true&order=${order}`;
        let response = await this.domoticzCall(uri);
        return response.result;
    }

    /**
     * Return favorites devices
     */
    async Devices_getFavorites() {
        let uri = "type=devices&used=true&filter=all&favorite=1";
        let response = await this.domoticzCall(uri);
        return response.result;
    }


    // SWITCH LIGHTS ----------------------------------------------------------

    /**
     * Ask Domoticz to action a Light/Switch
     * @param {integer} idx 
     * @param {string} command "On|Off"
     */
    async LightSwitch_set(idx, command="On") {
        let uri = `type=command&param=switchlight&idx=${idx}&switchcmd=${command}`;
        return await this.domoticzCall(uri);
    }

    /**
     * Ask Domoticz to toggle a Light/Switch
     * @param {integer} idx 
     */
    async LightSwitch_toggle(idx) {
        let uri = `type=command&param=switchlight&idx=${idx}&switchcmd=Toggle`;
        return await this.domoticzCall(uri);
    }


    // CAMERAS ----------------------------------------------------------------

    async Cameras_all() {
        let uri = "type=cameras";
        let response = await this.domoticzCall(uri);
        return response.result;
    }

    // SERVICE FUNCTIONS ------------------------------------------------------
    /**
     * Write a message into Domoticz Logs
     * @param {string} message 
     */
    async log(message) {
        message = "----------- DOMOTICZ API -----------> " + message;
        let uri = `type=command&param=addlogmessage&message=${encodeURI(message)}`;
        return await this.domoticzCall(uri);
    }

    /**
     * Get informations about the Domoticz Server
     */
    async version() {
        let uri = "type=command&param=getversion";
        return await this.domoticzCall(uri);
    }

    /**
     * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server
     */
    async times() {
        let uri = "type=command&param=getSunRiseSet";
        return await this.domoticzCall(uri);
    }

    /**
     * Send a notification through Domoticz Notification API
     * @param {string} subject
     * @param {string} message
     * @param {string} subSystem "<null>|browser|fcm|http|kodi|lms|nma|prowl|pushalot|pushbullet|pushover|pushsafer|telegram"
     */
    async notify(subject, message, subSystem=null) {
        let uri = `type=command&param=sendnotification&subject=${encodeURI(subject)}&body=${encodeURI(message)}`;
        if (subSystem) uri += `subsystem=${subSystem}`;
        console.log(uri);
        return await this.domoticzCall(uri);
    }

    /**
     * Generic API call
     * @param {string} order 
     */
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