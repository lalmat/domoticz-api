/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var DomoticzApi;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domoticz/cameras.js":
/*!*********************************!*\
  !*** ./src/domoticz/cameras.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCameras\": () => (/* binding */ useCameras)\n/* harmony export */ });\nfunction useCameras(domoticzApi) {\n  return {\n    /**\n     * Get all cameras informations\n     */\n    items() {\n      return domoticzApi.cameras();\n    }\n\n  };\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/domoticz/cameras.js?");

/***/ }),

/***/ "./src/domoticz/devices.js":
/*!*********************************!*\
  !*** ./src/domoticz/devices.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deviceTypes\": () => (/* binding */ deviceTypes),\n/* harmony export */   \"useDevices\": () => (/* binding */ useDevices)\n/* harmony export */ });\nconst deviceTypes = {\n  LIGHT: \"light\",\n  WEATHER: \"wheather\",\n  TEMP: \"temp\",\n  UTILITY: \"utility\",\n  WIND: \"wind\",\n  RAIN: \"rain\",\n  UV: \"uv\",\n  BARO: \"baro\",\n  ZWAVEALARM: \"zwavealarm\",\n  ALL: \"all\"\n};\n\nfunction isDeviceType(type) {\n  const result = Object.values(deviceTypes).find(value => value == type) != undefined;\n  if (!result) console.log(\"DeviceType not found\", type);\n  return result;\n}\n\nfunction useDevices(domoticzApi) {\n  return {\n    /**\n     * Get all devices, including the hidden ones\n     */\n    items() {\n      return domoticzApi.devices({\n        used: true,\n        displayhidden: 1\n      });\n    },\n\n    /**\n     * Get a specific device\n     * @param {integer} idx\n     */\n    getByIdx(idx) {\n      return domoticzApi.devices({\n        rid: idx\n      });\n    },\n\n    /**\n     * Retrieve devices of a specific type\n     * @param {deviceType} filter\n     * @param {string} orderBy\n     */\n    getByType(filter, orderBy = \"Name\") {\n      if (!isDeviceType(filter)) return false;\n      return domoticzApi.devices({\n        filter,\n        used: true,\n        order: orderBy\n      });\n    },\n\n    /**\n     * Return favorites devices\n     */\n    getFavorites() {\n      return domoticzApi.devices({\n        used: true,\n        filter: \"all\",\n        favorite: 1\n      });\n    },\n\n    /**\n     * Ask Domoticz to action a Light/Switch\n     * @param {integer} idx\n     * @param {string} command \"On|Off\"\n     */\n    switch(idx, command = \"On\") {\n      return domoticzApi.command({\n        param: \"switchlight\",\n        idx,\n        switchcmd: command.toLowerCase() === \"on\" ? \"On\" : \"Off\"\n      });\n    },\n\n    /**\n     * Ask Domoticz to toggle a Light/Switch\n     * @param {integer} idx\n     */\n    toggle(idx) {\n      return domoticzApi.command({\n        param: \"switchlight\",\n        idx,\n        switchcmd: \"Toggle\"\n      });\n    },\n\n    /**\n     * Rename the device identified by idx\n     * @param {int} idx\n     * @param {string} name\n     */\n    rename(idx, name) {\n      return domoticzApi.command({\n        param: \"renamedevice\",\n        idx,\n        name\n      });\n    },\n\n    /**\n     * Set/Remove the protection on a device identified by idx\n     * @param {boolean} state\n     */\n    protect(idx, state = true) {\n      return domoticzApi.setUsed({\n        used: true,\n        idx,\n        protected: state ? \"true\" : \"false\"\n      });\n    },\n\n    /**\n     * Set the new temperature\n     *\n     * @param {int} idx\n     * @param {int} temperature\n     * @returns\n     */\n    updateTemperature(idx, temperature) {\n      return this.updateDevice(idx, temperature);\n    },\n\n    /**\n     * Set the humidity datas of a device\n     *\n     * @param {int} idx Domoticz Device ID\n     * @param {string} humidityPercent  Ex: 45%\n     * @param {string} humidityState [0: Normal, 1: Confortable, 2: Dry, 3: Wet]\n     * @returns\n     */\n    updateHumidity(idx, humidityPercent, humidityState) {\n      if (humidityPercent < 0 || humidityPercent > 100) return null;\n      if (humidityState < 0 || humidityState > 5) return null;\n      return this.updateDevice(idx, humidityState, humidityPercent);\n    },\n\n    /**\n     * Set the barometer pressure and define the barometer forecast.\n     *\n     * @param {int} idx\n     * @param {int} barometer Atmospheric Pressure\n     * @param {int} barometerForecast see below\n     *\n     * If the device is a \"General\" Barometer device, forecast can be one of:\n     * 0 = Stable\n     * 1 = Sunny\n     * 2 = Cloudy\n     * 3 = Unstable\n     * 4 = Thunderstorm\n     * 5 = Unknown\n     * 6 = Cloudy/Rain\n     *\n     * For other device types can be one of:\n     * 0 = Heavy Snow\n     * 1 = Snow\n     * 2 = Heavy Rain\n     * 3 = Rain\n     * 4 = Cloudy\n     * 5 = Some Clouds\n     * 6 = Sunny\n     * 7 = Unknown\n     * 8 = Unstable\n     * 9 = Stable\n     *\n     * @returns\n     */\n    updateBarometer(idx, barometer, barometerForecast) {\n      return this.updateDevice(idx, `${barometer};${barometerForecast}`);\n    },\n\n    /**\n     * Generic update of a devices\n     *\n     * @param {int} idx\n     * @param {*} sValue\n     * @param {*} nValue\n     * @returns\n     */\n    updateDevice(idx, svalue, nvalue = 0) {\n      return domoticzApi.command({\n        param: \"udevice\",\n        idx,\n        svalue,\n        nvalue\n      });\n    }\n\n  };\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/domoticz/devices.js?");

/***/ }),

/***/ "./src/domoticz/events.js":
/*!********************************!*\
  !*** ./src/domoticz/events.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useEvents\": () => (/* binding */ useEvents)\n/* harmony export */ });\nfunction useEvents(domoticzApi) {\n  return {\n    /**\n     * Retrieve all Domoticz Events\n     */\n    items() {\n      return domoticzApi.events({\n        param: \"list\"\n      });\n    }\n\n  };\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/domoticz/events.js?");

/***/ }),

/***/ "./src/domoticz/notifications.js":
/*!***************************************!*\
  !*** ./src/domoticz/notifications.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notificationTypes\": () => (/* binding */ notificationTypes),\n/* harmony export */   \"useNotifications\": () => (/* binding */ useNotifications)\n/* harmony export */ });\nconst notificationTypes = {\n  NULL: \"<null>\",\n  BROWSER: \"browser\",\n  FCM: \"fcm\",\n  HTTP: \"http\",\n  KODI: \"kodi\",\n  LMS: \"lms\",\n  NMA: \"nma\",\n  PROWL: \"prowl\",\n  PUSHALOT: \"pushalot\",\n  PUSHBULLET: \"pushbullet\",\n  PUSHOVER: \"pushover\",\n  PUSHSAFER: \"pushsafer\",\n  TELEGRAM: \"telegram\"\n};\n\nfunction isNotificationType(type) {\n  return Object.values(notificationTypes).find(type) != undefined;\n}\n\nfunction useNotifications(domoticzApi) {\n  return {\n    /**\n     * Send a notification through Domoticz Notification API\n     * @param {string} subject\n     * @param {string} message\n     * @param {notificationType} subSystem\n     */\n    send(subject, message, subSystem = \"\") {\n      const options = {\n        param: \"sendnotification\",\n        subject,\n        body: message\n      };\n\n      if (subSystem != \"\") {\n        if (!isNotificationType(subSystem)) return;\n        options.subSystem = subSystem;\n      }\n\n      return domoticzApi.command(options);\n    }\n\n  };\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/domoticz/notifications.js?");

/***/ }),

/***/ "./src/domoticz/scenes.js":
/*!********************************!*\
  !*** ./src/domoticz/scenes.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useScenes\": () => (/* binding */ useScenes)\n/* harmony export */ });\nfunction useScenes(domoticzApi) {\n  return {\n    /**\n     * Get all the Domoticz\"s scenes\n     */\n    items() {\n      return domoticzApi.scenes();\n    },\n\n    /**\n     * Switch a state into a specific state\n     *\n     * @param {int} idx : Domoticz index of the device\n     * @param {string} command : string of the state, ex: 'Off'\n     */\n    switch(idx, command) {\n      return domoticzApi.command({\n        param: \"switch\",\n        idx,\n        switchcmd: command\n      });\n    },\n\n    /**\n     * Toggle a device (ex: On/Off\n     *\n     * @param {int} idx : Domoticz index of the device\n     */\n    toggle(idx) {\n      return this.switch(idx, \"Toggle\");\n    }\n\n  };\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/domoticz/scenes.js?");

/***/ }),

/***/ "./src/domoticz/system.js":
/*!********************************!*\
  !*** ./src/domoticz/system.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSystem\": () => (/* binding */ useSystem)\n/* harmony export */ });\nfunction useSystem(domoticzApi) {\n  return {\n    /**\n     * Write a message into Domoticz Logs\n     * @param {string} message\n     */\n    log(message) {\n      return domoticzApi.command({\n        param: \"addlogmessage\",\n        message: `DOMOTICZ API : ${message}`\n      });\n    },\n\n    /**\n     * Get various informations about the Domoticz Server\n     */\n    version() {\n      return domoticzApi.command({\n        param: \"getversion\"\n      });\n    },\n\n    /**\n     * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server\n     */\n    datetimes() {\n      return domoticzApi.command({\n        param: \"getSunRiseSet\"\n      });\n    },\n\n    /**\n     * Reboot Domoticz Server\n     */\n    reboot() {\n      return domoticzApi.command({\n        param: \"system_reboot\"\n      });\n    },\n\n    /**\n     * Shutdown the Domoticz Server\n     */\n    shutdown() {\n      return domoticzApi.command({\n        param: \"system_shutdown\"\n      });\n    },\n\n    /**\n     * Start Database backup\n     */\n    db_backup() {\n      return domoticzApi.get(\"backupdatabase.php\");\n    },\n\n    /**\n     * Execute database cleanup\n     */\n    db_vaccum() {\n      return domoticzApi.command({\n        param: \"vaccumdatabase\"\n      });\n    }\n\n  };\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/domoticz/system.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Domoticz\": () => (/* binding */ Domoticz),\n/* harmony export */   \"DomoticzApiProvider\": () => (/* reexport safe */ _providers_DomoticzApiProvider_js__WEBPACK_IMPORTED_MODULE_0__.DomoticzApiProvider),\n/* harmony export */   \"DomoticzApiProviderFetch\": () => (/* reexport safe */ _providers_DomoticzApiProviderFetch_js__WEBPACK_IMPORTED_MODULE_1__.DomoticzApiProviderFetch),\n/* harmony export */   \"deviceTypes\": () => (/* reexport safe */ _domoticz_devices_js__WEBPACK_IMPORTED_MODULE_2__.deviceTypes),\n/* harmony export */   \"notificationTypes\": () => (/* reexport safe */ _domoticz_notifications_js__WEBPACK_IMPORTED_MODULE_6__.notificationTypes),\n/* harmony export */   \"useCameras\": () => (/* reexport safe */ _domoticz_cameras_js__WEBPACK_IMPORTED_MODULE_3__.useCameras),\n/* harmony export */   \"useDevices\": () => (/* reexport safe */ _domoticz_devices_js__WEBPACK_IMPORTED_MODULE_2__.useDevices),\n/* harmony export */   \"useEvents\": () => (/* reexport safe */ _domoticz_events_js__WEBPACK_IMPORTED_MODULE_4__.useEvents),\n/* harmony export */   \"useNotifications\": () => (/* reexport safe */ _domoticz_notifications_js__WEBPACK_IMPORTED_MODULE_6__.useNotifications),\n/* harmony export */   \"useScenes\": () => (/* reexport safe */ _domoticz_scenes_js__WEBPACK_IMPORTED_MODULE_5__.useScenes),\n/* harmony export */   \"useSystem\": () => (/* reexport safe */ _domoticz_system_js__WEBPACK_IMPORTED_MODULE_7__.useSystem)\n/* harmony export */ });\n/* harmony import */ var _providers_DomoticzApiProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/DomoticzApiProvider.js */ \"./src/providers/DomoticzApiProvider.js\");\n/* harmony import */ var _providers_DomoticzApiProviderFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/DomoticzApiProviderFetch.js */ \"./src/providers/DomoticzApiProviderFetch.js\");\n/* harmony import */ var _domoticz_devices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domoticz/devices.js */ \"./src/domoticz/devices.js\");\n/* harmony import */ var _domoticz_cameras_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domoticz/cameras.js */ \"./src/domoticz/cameras.js\");\n/* harmony import */ var _domoticz_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domoticz/events.js */ \"./src/domoticz/events.js\");\n/* harmony import */ var _domoticz_scenes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domoticz/scenes.js */ \"./src/domoticz/scenes.js\");\n/* harmony import */ var _domoticz_notifications_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domoticz/notifications.js */ \"./src/domoticz/notifications.js\");\n/* harmony import */ var _domoticz_system_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domoticz/system.js */ \"./src/domoticz/system.js\");\n\n\n\n\n\n\n\n\n\nfunction Domoticz(hostname, options) {\n  const domoticzApi = options?.api ? options.api : new _providers_DomoticzApiProviderFetch_js__WEBPACK_IMPORTED_MODULE_1__.DomoticzApiProviderFetch(hostname, options);\n  return {\n    cameraManager: (0,_domoticz_cameras_js__WEBPACK_IMPORTED_MODULE_3__.useCameras)(domoticzApi),\n    deviceManager: (0,_domoticz_devices_js__WEBPACK_IMPORTED_MODULE_2__.useDevices)(domoticzApi),\n    eventManager: (0,_domoticz_events_js__WEBPACK_IMPORTED_MODULE_4__.useEvents)(domoticzApi),\n    notificationManager: (0,_domoticz_notifications_js__WEBPACK_IMPORTED_MODULE_6__.useNotifications)(domoticzApi),\n    sceneManager: (0,_domoticz_scenes_js__WEBPACK_IMPORTED_MODULE_5__.useScenes)(domoticzApi),\n    systemManager: (0,_domoticz_system_js__WEBPACK_IMPORTED_MODULE_7__.useSystem)(domoticzApi)\n  };\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/index.js?");

/***/ }),

/***/ "./src/providers/Base64.js":
/*!*********************************!*\
  !*** ./src/providers/Base64.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"b64encode\": () => (/* binding */ b64encode)\n/* harmony export */ });\nfunction b64encode(data) {\n  return typeof window === \"undefined\" ? b64encodeNode : b64encodeBrowser(data);\n}\n\nfunction b64encodeBrowser(data) {\n  return btoa(data);\n}\n\nfunction b64encodeNode(data) {\n  Buffer.from(data, \"base64\"); // eslint-disable-line no-undef\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/providers/Base64.js?");

/***/ }),

/***/ "./src/providers/DomoticzApiProvider.js":
/*!**********************************************!*\
  !*** ./src/providers/DomoticzApiProvider.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomoticzApiProvider\": () => (/* binding */ DomoticzApiProvider)\n/* harmony export */ });\n/* harmony import */ var _Base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base64.js */ \"./src/providers/Base64.js\");\n\n\nclass DomoticzApiProvider {\n  constructor(hostname, {\n    username,\n    password,\n    useSSL,\n    port\n  }) {\n    this.hostname = hostname;\n    this.username = username;\n    this.password = password;\n    this.useSSL = useSSL;\n    this.port = port;\n    this.endpoint = this.url(\"json.htm?_connector=domoticz-api\");\n  }\n\n  url(uri) {\n    const proto = `http${this.useSSL ? \"s\" : \"\"}://`;\n    const host = this.hostname;\n    const port = this.port ? this.port : this.useSSL ? 443 : 80;\n    const credentials = `&username=${(0,_Base64_js__WEBPACK_IMPORTED_MODULE_0__.b64encode)(this.username)}&password=${(0,_Base64_js__WEBPACK_IMPORTED_MODULE_0__.b64encode)(this.password)}`;\n    return `${proto}${host}:${port}/${uri}${credentials}`;\n  } // DOMOTICZ NATIVE CALLS\n\n\n  cameras(data) {\n    return this.domoticz({\n      type: \"cameras\",\n      ...data\n    });\n  }\n\n  command(data) {\n    return this.domoticz({\n      type: \"command\",\n      ...data\n    });\n  }\n\n  devices(data) {\n    return this.domoticz({\n      type: \"devices\",\n      ...data\n    });\n  }\n\n  events(data) {\n    return this.domoticz({\n      type: \"events\",\n      ...data\n    });\n  }\n\n  notifications(data) {\n    return this.domoticz({\n      type: \"notifications\",\n      ...data\n    });\n  }\n\n  scenes(data) {\n    return this.domoticz({\n      type: \"scenes\",\n      ...data\n    });\n  }\n\n  setUsed(data) {\n    return this.domoticz({\n      type: \"setUsed\",\n      ...data\n    });\n  } // TOOLING\n\n\n  get(uri) {\n    return this.__generic(\"GET\", this.url(uri));\n  }\n\n  domoticz(data) {\n    return this.__generic(\"GET\", this.endpoint, data);\n  } // Want to write an new HTTP manager (other than fetch) just create a new\n  // DomoticzApiProvider[foobar].js and implement only this method.\n  // eslint-disable-next-line no-unused-vars\n\n\n  __generic(method, endpoint, data, content) {}\n\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/providers/DomoticzApiProvider.js?");

/***/ }),

/***/ "./src/providers/DomoticzApiProviderFetch.js":
/*!***************************************************!*\
  !*** ./src/providers/DomoticzApiProviderFetch.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomoticzApiProviderFetch\": () => (/* binding */ DomoticzApiProviderFetch)\n/* harmony export */ });\n/* harmony import */ var _DomoticzApiProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomoticzApiProvider.js */ \"./src/providers/DomoticzApiProvider.js\");\n\n\nclass DomoticzApiProviderFetch extends _DomoticzApiProvider_js__WEBPACK_IMPORTED_MODULE_0__.DomoticzApiProvider {\n  async __generic(method, endpoint, data, content = null) {\n    const uriParams = Object.entries(data).reduce((uri, [key, value]) => {\n      return `${uri}&${encodeURI(key)}=${encodeURI(value)}`;\n    }, \"\");\n    const options = {\n      method,\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      },\n      body: content ? JSON.stringify(content) : null\n    };\n    const result = await fetch(`${endpoint}${uriParams}`, options);\n    return await result.json();\n  }\n\n}\n\n\n\n//# sourceURL=webpack://DomoticzApi/./src/providers/DomoticzApiProviderFetch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	DomoticzApi = __webpack_exports__;
/******/ 	
/******/ })()
;