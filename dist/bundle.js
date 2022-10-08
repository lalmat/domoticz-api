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

/***/ "./src/CamerasContoller.js":
/*!*********************************!*\
  !*** ./src/CamerasContoller.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(ApiBridge) {\n    this.api = ApiBridge;\n  }\n  /**\n   * Get all cameras informations\n   */\n\n\n  all() {\n    return this.api.cameras();\n  }\n\n  get() {\n    return this.all();\n  }\n\n});\n\n//# sourceURL=webpack://DomoticzApi/./src/CamerasContoller.js?");

/***/ }),

/***/ "./src/DevicesController.js":
/*!**********************************!*\
  !*** ./src/DevicesController.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(ApiBridge) {\n    this.api = ApiBridge;\n  }\n  /**\n   * Get all devices, including the hidden ones\n   */\n\n\n  all() {\n    return this.api.devices({\n      used: true,\n      displayhidden: 1\n    });\n  }\n\n  get() {\n    return this.all();\n  }\n  /**\n   * Get a specific device\n   * @param {integer} idx\n   */\n\n\n  getByIdx(idx) {\n    return this.api.devices({\n      rid: idx\n    });\n  }\n\n  types() {\n    return [\"light\", \"weather\", \"temp\", \"utility\", \"wind\", \"rain\", \"uv\", \"baro\", \"zwavealarms\", \"all\"];\n  }\n  /**\n   * Retrieve devices of a specific type\n   * @param {string} filter \"light|weather|temp|utility|wind|rain|uv|baro|zwavealarms|all\"\n   * @param {string} orderBy\n   */\n\n\n  async getByType(filter, orderBy = \"Name\") {\n    const filterAllowed = (await this.types()).includes(filter);\n    if (!filterAllowed) return false;\n    return this.api.devices({\n      filter,\n      used: true,\n      order: orderBy\n    });\n  }\n  /**\n   * Return favorites devices\n   */\n\n\n  getFavorites() {\n    return this.api.devices({\n      used: true,\n      filter: \"all\",\n      favorite: 1\n    });\n  }\n  /**\n   * Ask Domoticz to action a Light/Switch\n   * @param {integer} idx\n   * @param {string} command \"On|Off\"\n   */\n\n\n  switch(idx, command = \"On\") {\n    return this.api.command({\n      param: \"switchlight\",\n      idx,\n      switchcmd: command.toLowerCase() === \"on\" ? \"On\" : \"Off\"\n    });\n  }\n  /**\n   * Ask Domoticz to toggle a Light/Switch\n   * @param {integer} idx\n   */\n\n\n  toggle(idx) {\n    return this.api.command({\n      param: \"switchlight\",\n      idx,\n      switchcmd: \"Toggle\"\n    });\n  }\n  /**\n   * Rename the device identified by idx\n   * @param {int} idx\n   * @param {string} name\n   */\n\n\n  rename(idx, name) {\n    return this.api.command({\n      param: \"renamedevice\",\n      idx,\n      name\n    });\n  }\n  /**\n   * Set/Remove the protection on a device identified by idx\n   * @param {boolean} state\n   */\n\n\n  protect(idx, state = true) {\n    return this.api.setUsed({\n      used: true,\n      idx,\n      protected: state ? \"true\" : \"false\"\n    });\n  }\n  /**\n   * Set the new temperature\n   *\n   * @param {int} idx\n   * @param {int} temperature\n   * @returns\n   */\n\n\n  updateTemperature(idx, temperature) {\n    return this.updateDevice(idx, temperature);\n  }\n  /**\n   * Set the humidity datas of a device\n   *\n   * @param {int} idx Domoticz Device ID\n   * @param {string} humidityPercent  Ex: 45%\n   * @param {string} humidityState [0: Normal, 1: Confortable, 2: Dry, 3: Wet]\n   * @returns\n   */\n\n\n  updateHumidity(idx, humidityPercent, humidityState) {\n    if (humidityPercent < 0 || humidityPercent > 100) return null;\n    if (humidityState < 0 || humidityState > 5) return null;\n    return this.updateDevice(idx, humidityState, humidityPercent);\n  }\n  /**\n   * Set the barometer pressure and define the barometer forecast.\n   *\n   * @param {int} idx\n   * @param {int} barometer Atmospheric Pressure\n   * @param {int} barometerForecast see below\n   *\n   * If the device is a \"General\" Barometer device, forecast can be one of:\n   * 0 = Stable\n   * 1 = Sunny\n   * 2 = Cloudy\n   * 3 = Unstable\n   * 4 = Thunderstorm\n   * 5 = Unknown\n   * 6 = Cloudy/Rain\n   *\n   * For other device types can be one of:\n   * 0 = Heavy Snow\n   * 1 = Snow\n   * 2 = Heavy Rain\n   * 3 = Rain\n   * 4 = Cloudy\n   * 5 = Some Clouds\n   * 6 = Sunny\n   * 7 = Unknown\n   * 8 = Unstable\n   * 9 = Stable\n   *\n   * @returns\n   */\n\n\n  updateBarometer(idx, barometer, barometerForecast) {\n    return this.updateDevice(idx, `${barometer};${barometerForecast}`);\n  }\n  /**\n   * Generic update of a devices\n   *\n   * @param {int} idx\n   * @param {*} sValue\n   * @param {*} nValue\n   * @returns\n   */\n\n\n  updateDevice(idx, svalue, nvalue = 0) {\n    return this.api.command({\n      param: \"udevice\",\n      idx,\n      svalue,\n      nvalue\n    });\n  }\n\n});\n\n//# sourceURL=webpack://DomoticzApi/./src/DevicesController.js?");

/***/ }),

/***/ "./src/EventsController.js":
/*!*********************************!*\
  !*** ./src/EventsController.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(ApiBridge) {\n    this.api = ApiBridge;\n  }\n  /**\n   * Retrieve all Domoticz Events\n   */\n\n\n  all() {\n    return this.api.events({\n      param: \"list\"\n    });\n  }\n  /**\n   * Only to not introduce breaking changes\n   * @deprecated\n   */\n\n\n  get() {\n    return this.all();\n  }\n\n});\n\n//# sourceURL=webpack://DomoticzApi/./src/EventsController.js?");

/***/ }),

/***/ "./src/NotificationController.js":
/*!***************************************!*\
  !*** ./src/NotificationController.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(ApiBridge) {\n    this.api = ApiBridge;\n  }\n  /**\n   * Send a notification through Domoticz Notification API\n   * @param {string} subject\n   * @param {string} message\n   * @param {string} subSystem \"<null>|browser|fcm|http|kodi|lms|nma|prowl|pushalot|pushbullet|pushover|pushsafer|telegram\"\n   */\n\n\n  send(subject, message, subSystem = \"\") {\n    return this.api.command({\n      param: \"sendnotification\",\n      subject,\n      body: message,\n      subsystem: subSystem\n    });\n  }\n\n});\n\n//# sourceURL=webpack://DomoticzApi/./src/NotificationController.js?");

/***/ }),

/***/ "./src/ScenesController.js":
/*!*********************************!*\
  !*** ./src/ScenesController.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(ApiBridge) {\n    this.api = ApiBridge;\n  }\n  /**\n   * Get all the Domoticz\"s scenes\n   */\n\n\n  all() {\n    return this.api.scenes();\n  }\n\n  get() {\n    return this.all();\n  }\n  /**\n   * Switch a state into a specific state\n   *\n   * @param {int} idx : Domoticz index of the device\n   * @param {string} command : string of the state, ex: 'Off'\n   */\n\n\n  switch(idx, command) {\n    return this.api.command({\n      param: \"switch\",\n      idx,\n      switchcmd: command\n    });\n  }\n  /**\n   * Toggle a device (ex: On/Off\n   *\n   * @param {int} idx : Domoticz index of the device\n   */\n\n\n  toggle(idx) {\n    return this.switch(idx, \"Toggle\");\n  }\n\n});\n\n//# sourceURL=webpack://DomoticzApi/./src/ScenesController.js?");

/***/ }),

/***/ "./src/SystemController.js":
/*!*********************************!*\
  !*** ./src/SystemController.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(ApiBridge) {\n    this.api = ApiBridge;\n  }\n  /**\n   * Write a message into Domoticz Logs\n   * @param {string} message\n   */\n\n\n  log(message) {\n    return this.api.command({\n      param: \"addlogmessage\",\n      message: `############# DOMOTICZ API ############# => ${message}`\n    });\n  }\n  /**\n   * Get various informations about the Domoticz Server\n   */\n\n\n  version() {\n    return this.api.command({\n      param: \"getversion\"\n    });\n  }\n  /**\n   * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server\n   */\n\n\n  datetimes() {\n    return this.api.command({\n      param: \"getSunRiseSet\"\n    });\n  }\n  /**\n   * Reboot Domoticz Server\n   */\n\n\n  reboot() {\n    return this.api.command({\n      param: \"system_reboot\"\n    });\n  }\n  /**\n   * Shutdown the Domoticz Server\n   */\n\n\n  shutdown() {\n    return this.api.command({\n      param: \"system_shutdown\"\n    });\n  }\n  /**\n   * Start Database backup\n   */\n\n\n  db_backup() {\n    return this.api.get(\"backupdatabase.php\");\n  }\n  /**\n   * Execute database cleanup\n   */\n\n\n  db_vaccum() {\n    return this.api.command({\n      param: \"vaccumdatabase\"\n    });\n  }\n\n});\n\n//# sourceURL=webpack://DomoticzApi/./src/SystemController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomoticzApi\": () => (/* binding */ DomoticzApi)\n/* harmony export */ });\n/* harmony import */ var _providers_DomoticzApiProviderFetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/DomoticzApiProviderFetch.js */ \"./src/providers/DomoticzApiProviderFetch.js\");\n/* harmony import */ var _CamerasContoller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CamerasContoller.js */ \"./src/CamerasContoller.js\");\n/* harmony import */ var _DevicesController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DevicesController.js */ \"./src/DevicesController.js\");\n/* harmony import */ var _EventsController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventsController.js */ \"./src/EventsController.js\");\n/* harmony import */ var _ScenesController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScenesController.js */ \"./src/ScenesController.js\");\n/* harmony import */ var _NotificationController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotificationController.js */ \"./src/NotificationController.js\");\n/* harmony import */ var _SystemController_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SystemController.js */ \"./src/SystemController.js\");\n\n\n\n\n\n\n\nclass DomoticzApi {\n  constructor(hostname, options) {\n    this.api = new _providers_DomoticzApiProviderFetch_js__WEBPACK_IMPORTED_MODULE_0__.DomoticzApiProviderFetch(hostname, options);\n    this.cameras = new _CamerasContoller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.api);\n    this.devices = new _DevicesController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.api);\n    this.events = new _EventsController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.api);\n    this.scenes = new _ScenesController_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.api);\n    this.notification = new _NotificationController_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.api);\n    this.system = new _SystemController_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.api);\n  }\n\n}\n\n//# sourceURL=webpack://DomoticzApi/./src/index.js?");

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