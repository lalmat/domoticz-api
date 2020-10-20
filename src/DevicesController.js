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
     * @param {string} order
     */
    async getByType(filter, order="Name") {
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
}