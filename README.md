# domoticz-api

## ⚠️ **Warning** : Work in progress.

The goal of this project is to have an object to easely access a [Domoticz](https://www.domoticz.com) instance. Devices, user variables, send notifications, etc. will be accessible with just function calls. With Domoticz API, it's very easy to build awesome frontend with javascript frameworks like Vue / React / Angular.

This API uses the interfaces as defined at Domoticz API/JSON URL's. This page does not describe all available url's. This API also uses some 'undocumented' api url's.

## About Domoticz API
Domoticz API helps create a central sensor-controlled portal for synchronizing home utility devices ranging from electrical devices, electronic gadgets, water, and gas as well as weather monitoring instruments. It is a RESTful API that generates JSON returns from HTTP requests.

## This is a "working" but beta version

You can use this lib as an import, or directly thru the browser.

### Installation:
Download this repository to get an up to date version or :
```bash
npm install domoticz-api-linker
```

### Browser usage :
Place this into your HTML head section :
```html
    <script src="path_to/domoticz-api/dist/bundle.js"></script>
    <script>
        var domoticz = new DomoticzApi.DomoticzApi(YOUR_HOST, {
            useSSL : true,
            username: YOUR_USERNAME,
            password: YOUR_PASSWORD
        });
    </script>
```

To see it in action, clone this repo, and go to demo/browser, then open index.html in you browser.

### Library usage :
```javascript
import DomoticzApi from "./domoticz-api/dist/bundle.js";

let domoticz = new DomoticzApi(YOUR_HOST, {
    useSSL : true,
    username: YOUR_USERNAME,
    password: YOUR_PASSWORD
});
```
------
## 🎯 Todos:
I'm actually focused on retrieving datas (Events / Camera / Devices). Then, I'll add Domoticz management functions to add / delete devices, then I'll dig into Domoticz source code to get undocumented functions available.

------
## 📜 Documentation:

* [Cameras](docs/cameras.md)
* [Devices](docs/devices.md)
* [Events](docs/events.md)
* [Notification](docs/notifications.md)
* [Scenes](docs/scenes.md)
* [System](docs/system.md)
