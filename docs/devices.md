## Devices

### **domoticz.devices.get()**

Get all devices, including the hidden ones

---

### **domoticz.devices.getByIdx(idx)**

Get a specific device using the idx device property value.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |

---

### **domoticz.devices.getByType(filter, orderBy="Name")**

Get all devices of a certain type.

| Parameter | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| filter    | light / weather / temp / utility / wind / rain / uv / baro / zwavealarms / all |
| orderBy   | device property to use during order by                                         |

---

### **domoticz.devices.getFavorites()**

Get Domoticz Favorites Devices

---

### **domoticz.devices.switch(idx, command="On")**

Change state of a Light/Switch device.

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| idx       | idx value of the device in Domoticz                       |
| command   | A Domoticz device command On/Off/... **case sensitive !** |

---

### **domoticz.devices.toggle(idx)**

Toggle a Light/Switch device.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |

---

### **domoticz.devices.rename(idx, newName)**

Rename the device

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |
| newName   | New name of the device              |

---

### **domoticz.devices.setProtection(idx, state)**

Change protection mode of the device. An administrator password is needed
in a popup to switch a protected device.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |
| state     | true/false                          |

---

### **domoticz.devices.updateTemperature(idx, temperature)**

Update the temperature associated to the device (Termometers).

| Parameter   | Description                         |
| ----------- | ----------------------------------- |
| idx         | idx value of the device in Domoticz |
| temperature | Numeric value of the temperature    |

---

### **domoticz.devices.updateHumidity(idx, humidityPercent, humidityState)**

Update the temperature associated to the device (Termometers).

| Parameter       | Description                               |
| --------------- | ----------------------------------------- |
| idx             | idx value of the device in Domoticz       |
| humidityPercent | Percent of humidity, ex: 45%              |
| humidityState   | 0: Normal, 1: Confortable, 2: Dry, 3: Wet |

---

### **domoticz.devices.updateBarometer(idx, barometer, barometerForecast)**

Update the temperature associated to the device (Termometers).

| Parameter       | Description                         |
| --------------- | ----------------------------------- |
| idx             | idx value of the device in Domoticz |
| humidityPercent | Atmospheric Pressure                |
| humidityState   | barometerForecast see below         |

For devices of type "General" use theses values for humidityState :

| Value | Signification |
| ----- | ------------- |
| 0     | Stable        |
| 1     | Sunny         |
| 2     | Cloudy        |
| 3     | Unstable      |
| 4     | Thunderstorm  |
| 5     | Unknown       |
| 6     | Cloudy/Rain   |

For other device types use theses values for humidityState :

| Value | Signification |
| ----- | ------------- |
| 0     | Heavy Snow    |
| 1     | Snow          |
| 2     | Heavy Rain    |
| 3     | Rain          |
| 4     | Cloudy        |
| 5     | Some Clouds   |
| 6     | Sunny         |
| 7     | Unknown       |
| 8     | Unstable      |
| 9     | Stable        |

### **domoticz.devices.updateDevice(idx, sValue, nValue = 0)**

This is a generic device update, used by update devices methods above.
You can use this method if there's no specific method for an update.

Refer to the [Domoticz API](https://www.domoticz.com/wiki/Domoticz_API/JSON_URL's#Update_devices.2Fsensors) to find what to use as `sValue` and `nValue`.


| Parameter | Description                          |
| --------- | ------------------------------------ |
| idx       | idx value of the device in Domoticz  |
| sValue    | sValue param of API calls            |
| nValue    | nValue param of API call (default:0) |
