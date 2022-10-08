const notificationTypes = {
  NULL: "<null>",
  BROWSER: "browser",
  FCM: "fcm",
  HTTP: "http",
  KODI: "kodi",
  LMS: "lms",
  NMA: "nma",
  PROWL: "prowl",
  PUSHALOT: "pushalot",
  PUSHBULLET: "pushbullet",
  PUSHOVER: "pushover",
  PUSHSAFER: "pushsafer",
  TELEGRAM: "telegram",
};

function isNotificationType(type) {
  return Object.values(notificationTypes).find(type) != undefined;
}

function useNotifications(domoticzApi) {
  return {
    /**
     * Send a notification through Domoticz Notification API
     * @param {string} subject
     * @param {string} message
     * @param {notificationType} subSystem
     */
    send(subject, message, subSystem = "") {
      const options = {
        param: "sendnotification",
        subject,
        body: message,
      };

      if (subSystem != "") {
        if (!isNotificationType(subSystem)) return;
        options.subSystem = subSystem;
      }

      return domoticzApi.command(options);
    },
  };
}

export { notificationTypes, useNotifications };
