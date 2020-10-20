export default class {

    constructor(ApiBridge) {
        this.api = ApiBridge;
    }

    /**
     * Ask Domoticz to action a Light/Switch
     * @param {integer} idx
     * @param {string} command "On|Off"
     */
    async send(idx, command="On") {
        let uri = `type=command&param=switchlight&idx=${idx}&switchcmd=${command}`;
        return await this.api.send(uri);
    }

    /**
     * Ask Domoticz to toggle a Light/Switch
     * @param {integer} idx
     */
    async toggle(idx) {
        let uri = `type=command&param=switchlight&idx=${idx}&switchcmd=Toggle`;
        return await this.api.send(uri);
    }
}