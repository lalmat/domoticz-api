# domoticz-api

## ⚠️ **Warning** : Work in progress.

The goal of this project is to have an object to easely access a [Domoticz](https://www.domoticz.com) instance. Devices, user variables, send notifications, etc. will be accessible with just function calls. With Domoticz API, it's very easy to build awesome frontend with javascript frameworks like Vue / React / Angular.

This API uses the interfaces as defined at Domoticz API/JSON URL's. This page does not describe all available url's. This API also uses some 'undocumented' api url's.

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
<script src="path_to/domoticz-api/dist/domoticz-api.iife.js"></script>
<script>
  const domoticz = DomoticzApi.useDomoticz({
    hostname: YOUR_HOST,
    port: YOUR_PORT,
    username: YOUR_USERNAME,
    password: YOUR_PASSWORD,
    useSSL: true
  });
</script>
```

To see it in action, clone this repo, and go to demo/browser, then open index.html in you browser.

### Usage in React/Vue/xxx :

```javascript
import { Domoticz } from "domoticz-api-linker/src/index.esm.js";

const domoticz = useDomoticz({
  hostname: YOUR_HOST,
  port: YOUR_PORT,
  username: YOUR_USERNAME,
  password: YOUR_PASSWORD,
  useSSL: true
});
```
> You can use `index.cjs.js` if you're using CommonJS.

### Usage

```javascript
// Get All devices:
const items = await domoticz.devicesManager.items();

// Get all lights :
import { DOMOTICZ_DEVICE } from "domoticz-api-linker/src/index.esm.js";
const lights = await domoticz.getByType(DOMOTICZ_DEVICE.LIGHT);

// Switch on the first light :
import { DOMOTICZ_SWITCHCMD } from "domoticz-api-linker/src/index.esm.js";
domoticz.switch(lights.results[0].idx, DOMOTICZ_SWITCHCMD.ON);
```

### Using another HTTP layer

By default DomoticzApi use `fetch`. If you want to use axios :

- Create a new class (eg. `DomoticzApiProviderAxios` which extends the `DomoticzApiProvider` class
- Implement the `__generic()` function to deal with axios
- Pass this class in the `api` parameter in options like this:

```javascript
import { DomoticzApiProviderAxios } from "domoticz-api-linker";
const domoticz = Domoticz(YOUR_HOST, {
  useSSL: true,
  username: YOUR_USERNAME,
  password: YOUR_PASSWORD,
  api: DomoticzApiProviderAxios,
});
```

### Imports

All things can be imported :

| Import                     | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| Domoticz                   | The main Domoticz object, giving you access to all the managers     |
| DomoticzApiProvider        | A class used to override the HTTP api call with you prefered flavor |
| DomoticzApiProviderFetch   | Defaut HTTP api call layer using native javascript `fetch` object   |
| deviceTypes                | Contain the Domoticz devices types                                  |
| deviceHumidityTypes        | Contain the Domoticz humidity types                                 |
| deviceHumidityGeneralTypes | Contain the Domoticz humidity types for 'General' devices           |
| useDevices(api)            | methods available in Domoticz.deviceManager                         |
| useCameras(api)            | methods available in Domoticz.cameraManager                         |
| useEvents(api)             | methods available in Domoticz.eventManager                          |
| useNotifications(api)      | methods available in Domoticz.notificationManager                   |
| useScenes(api)             | methods available in Domoticz.sceneManager                          |
| useSystem(api)             | methods available in Domoticz.systemManager                         |

---

## 🎯 Todos:

- [x] Refactoring API
- [x] Full rewrite in TypeScript
- [ ] Adding management functions (WIP)
- [ ] Digging into Domoticz Source Code to implement undocumented functions

---

## 📜 API Documentation:

- [Cameras](docs/cameras.md)
- [Devices](docs/devices.md)
- [Events](docs/events.md)
- [Notification](docs/notifications.md)
- [Scenes](docs/scenes.md)
- [System](docs/system.md)
