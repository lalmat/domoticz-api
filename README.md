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

------
## Cameras

### **domoticz.camera.get()**
Get all cameras informations

------
## Devices

### **domoticz.devices.get()**
Get all devices, including the hidden ones

### **domoticz.devices_getByIdx(idx)**
Get a specific device using the idx device property value.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |

### **domoticz.devices_getByType(filter, orderBy="Name")**
Get all devices of a certain type.

| Parameter | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| filter    | light / weather / temp / utility / wind / rain / uv / baro / zwavealarms / all |
| orderBy   | device property to use during order by                                         |

### **domoticz.devices_getFavorites()**
Get Domoticz Favorites Devices

------
## Events
### **domoticz.events.all()**
Retrieve all existing Events

------
## LightSwitch

### **domoticz.lightSwitch.send(idx, command="On")**
Change state of a Light/Switch device.

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| idx       | idx value of the device in Domoticz                       |
| command   | A Domoticz device command On/Off/... **case sensitive !** |

### **domoticz.lightSwitch.toggle(idx)**
Toggle a Light/Switch device.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |

------
## Notification

### **domoticz.notification.send(subject, message, subsystem=null)**
Send a notification through Domoticz Notification API.

| Parameter | Description                           |
| --------- | ------------------------------------- |
| subject   | Title of the notification |
| message   | Body of the notification |
| subSystem | Specify the Domoticz Notification subsystem to use : <null>/browser/fcm/http/kodi/lms/nma/prowl/pushalot/pushbullet/pushover/pushsafer/telegram |

------
## System

### **domoticz.system.datetimes()** :
Get various datetimes (Local time, Sunset, Sunrise, etc.) from Domoticz Server.

### **domoticz.system.log(message)** :
Write a message into Domoticz Logs

| Parameter | Description                           |
| --------- | ------------------------------------- |
| message   | message to write into Domoticz's logs |

### **domoticz.system.reboot()** :
Reboot the Domoticz server

### **domoticz.system.version()**:
Get various informations about the Domoticz Server

