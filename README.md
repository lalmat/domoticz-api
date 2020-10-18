# domoticz-api

## **Warning** : Work in progress.

The goal of this project is to have an object to easely access a [Domoticz](https://www.domoticz.com) instance. Devices, user variables, send notifications, etc. will be accessible with just function calls. With Domoticz API, it's very easy to build  awesome frontend with javascript frameworks like Vue / React / Angular. 

This API uses the interfaces as defined at Domoticz API/JSON URL's. This page does not describe all available url's. This API also uses some 'undocumented' api url's.

## This is a "working" but beta version

You can use this lib as an import, or directly thru the browser.

### Browser Usage :
```html
    <script src="path_to/domoticz-api/dist/bundle.js"></script>
    <script>
        var api = new Domoticz.API(YOUR_HOST, {
            useSSL : true,
            username: YOUR_USERNAME,
            password: YOUR_PASSWORD
        });
    </script>
```

To see it in action, clone this repo, and go to demo/browser, then open index.html in you browser.

## Todos:
I'm actually focused on retrieving datas (Events / Camera / Devices). Then, I'll add domoticz management functions to add / delete devices.

## Available functions :

| Function        | Comment                              | Parameters |
| --------------  | ------------------------------------ | ----------|
| Events_all()    | Retrieve all Events | |
| Devices_all()   | Get all devices, including the hidden ones | |
| Devices_getByIdx(idx) | Get a specific device using the idx device parameter | **idx**: Device ID |
| Devices_getByType(filter, order="Name") | Get all devices of a certain type. | **filter**: "light|weather|temp|utility|wind|rain|uv|baro|zwavealarms|all", **order**: name of one device object property |
| Devices_getFavorites() | Get Domoticz Favorites Devices | |
| LightSwitch_set(idx, command="On") | Change state of a Light/Switch device. | **idx**: Device ID, **command**:"On/Off/Toggle" |
| LightSwitch_toggle(idx) | Toggle a Light/Switch device. | **idx**: Device ID |
| Cameras_all() | Get all cameras informations| |
| Log_push(message) | Write a message into Domoticz Logs | **message**: Log message |
| Version() | Get various informations about the Domoticz Server | |
| Times_all() | Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server | |
| Notify(subject, message, subSystem=null) | Send a notification through Domoticz Notification API. | **subject**: Subject of your notification, **message**: Message of the notification, **subSystem**: <null>/browser/fcm/http/kodi/lms/nma/prowl/pushalot/pushbullet/pushover/pushsafer/telegram" |
| Reboot() | Reboot Domoticz server | |
