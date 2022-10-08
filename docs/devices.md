## Devices

### **domoticz.deviceManager.items()**

Get all devices, including the hidden ones

---

### **domoticz.deviceManager.getByIdx(idx)**

Get a specific device using the idx device property value.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |

---

### **domoticz.deviceManager.getByType(filter, orderBy="Name")**

Get all devices of a certain type.

| Parameter | Description                            |
| --------- | -------------------------------------- |
| filter    | a supported device type                |
| orderBy   | device property to use during order by |

> `filter` is an item of `domoticz.deviceTypes.*` like `domoticz.deviceType.LIGHT`

---

### **domoticz.deviceManager.getFavorites()**

Get Domoticz Favorites Devices

---

### **domoticz.deviceManager.switch(idx, command="On")**

Change state of a Light/Switch device.

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| idx       | idx value of the device in Domoticz                       |
| command   | A Domoticz device command On/Off/... **case sensitive !** |

---

### **domoticz.deviceManager.toggle(idx)**

Toggle a Light/Switch device.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |

---

### **domoticz.deviceManager.rename(idx, newName)**

Rename the device

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |
| newName   | New name of the device              |

---

### **domoticz.deviceManager.protect(idx, state)**

Change protection mode of the device. An administrator password is needed
in a popup to switch a protected device.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |
| state     | true/false                          |

---

### **domoticz.deviceManager.updateTemperature(idx, temperature)**

Update the temperature associated to the device (Termometers).

| Parameter   | Description                         |
| ----------- | ----------------------------------- |
| idx         | idx value of the device in Domoticz |
| temperature | Numeric value of the temperature    |

---

### **domoticz.deviceManager.updateHumidity(idx, humidityPercent, humidityState)**

Update the temperature associated to the device (Termometers).

| Parameter       | Description                               |
| --------------- | ----------------------------------------- |
| idx             | idx value of the device in Domoticz       |
| humidityPercent | Percent of humidity, ex: 45%              |
| humidityState   | 0: Normal, 1: Confortable, 2: Dry, 3: Wet |

---

### **domoticz.deviceManager.updateBarometer(idx, barometer, barometerForecast)**

Update the temperature associated to the device (Termometers).

| Parameter       | Description                         |
| --------------- | ----------------------------------- |
| idx             | idx value of the device in Domoticz |
| humidityPercent | Atmospheric Pressure                |
| humidityState   | a deviceHumidityType                |

> Use a `domoticz.deviceHumidityTypes.*` (or if your device is a 'General' type, use one of `domoticz.deviceHumidityGeneralTypes.*` instead.

### **domoticz.deviceManager.updateDevice(idx, sValue, nValue = 0)**

This is a generic device update, used by update devices methods above.
You can use this method if there's no specific method for an update.

Refer to the [Domoticz API](https://www.domoticz.com/wiki/Domoticz_API/JSON_URL's#Update_devices.2Fsensors) to find what to use as `sValue` and `nValue`.

| Parameter | Description                          |
| --------- | ------------------------------------ |
| idx       | idx value of the device in Domoticz  |
| sValue    | sValue param of API calls            |
| nValue    | nValue param of API call (default:0) |
