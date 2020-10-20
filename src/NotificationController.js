export default class {

    constructor(ApiBridge) {
        this.api = ApiBridge;
    }

    /**
     * Send a notification through Domoticz Notification API
     * @param {string} subject
     * @param {string} message
     * @param {string} subSystem "<null>|browser|fcm|http|kodi|lms|nma|prowl|pushalot|pushbullet|pushover|pushsafer|telegram"
     */
    async send(subject, message, subSystem=null) {
        let uri = `type=command&param=sendnotification&subject=${encodeURI(subject)}&body=${encodeURI(message)}`;
        if (subSystem) uri += `subsystem=${subSystem}`;

        return await this.api.send(uri);
    }
}