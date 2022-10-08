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
  send(subject, message, subSystem = "") {
    return this.api.command({
      param: "sendnotification",
      subject,
      body: message,
      subsystem: subSystem,
    });
  }
}
