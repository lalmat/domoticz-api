## Devices

### **domoticz.devices.get()**
Get all devices, including the hidden ones

### **domoticz.devices.getByIdx(idx)**
Get a specific device using the idx device property value.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |

### **domoticz.devices.getByType(filter, orderBy="Name")**
Get all devices of a certain type.

| Parameter | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| filter    | light / weather / temp / utility / wind / rain / uv / baro / zwavealarms / all |
| orderBy   | device property to use during order by                                         |

### **domoticz.devices.getFavorites()**
Get Domoticz Favorites Devices

### **domoticz.devices.switch(idx, command="On")**
Change state of a Light/Switch device.

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| idx       | idx value of the device in Domoticz                       |
| command   | A Domoticz device command On/Off/... **case sensitive !** |

### **domoticz.devices.toggle(idx)**
Toggle a Light/Switch device.

| Parameter | Description                         |
| --------- | ----------------------------------- |
| idx       | idx value of the device in Domoticz |