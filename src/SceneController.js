export default class {

    constructor(ApiBridge) {
        this.api = ApiBridge;
    }

    async get() {
        let uri = "type=scenes";
        return await this.api.send(uri);
    }

    async switch(idx, command) {
        let uri = `type=command&param=switchscene&idx=${idx}&switchcmd=${command}`;
        return await this.api.send(uri);
    }

    async toggle(idx) {
        this.switch(idx, "Toggle");
    }
}