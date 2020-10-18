class API {

    constructor(options) {
        this.options = {
            host     : options.host     ? options.host     : null,
            username : options.username ? options.username : null,
            password : options.password ? options.password : null,
        };
    }

    getOptions() {
        return this.options;
    }
}

export {
    API
};