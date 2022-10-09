var DomoticzApi;(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function i(e){return"undefined"==typeof window?n:function(e){return btoa(e)}(e)}function n(e){Buffer.from(e,"base64")}e.r(t),e.d(t,{Domoticz:()=>f,DomoticzApiProvider:()=>s,DomoticzApiProviderFetch:()=>r,deviceHumidityGeneralTypes:()=>a,deviceHumidityTypes:()=>c,deviceTypes:()=>o,notificationTypes:()=>l,useCameras:()=>u,useDevices:()=>d,useEvents:()=>m,useNotifications:()=>h,useScenes:()=>p,useSystem:()=>v});class s{constructor(e,{username:t,password:i,useSSL:n,port:s}){this.hostname=e,this.username=t,this.password=i,this.useSSL=n,this.port=s,this.endpoint=this.url("json.htm?_connector=domoticz-api")}url(e){return`http${this.useSSL?"s":""}://${this.hostname}:${this.port?this.port:this.useSSL?443:80}/${e}&username=${i(this.username)}&password=${i(this.password)}`}cameras(e){return this.domoticz({type:"cameras",...e})}command(e){return this.domoticz({type:"command",...e})}devices(e){return this.domoticz({type:"devices",...e})}events(e){return this.domoticz({type:"events",...e})}notifications(e){return this.domoticz({type:"notifications",...e})}scenes(e){return this.domoticz({type:"scenes",...e})}setUsed(e){return this.domoticz({type:"setUsed",...e})}get(e){return this.__generic("GET",this.url(e))}domoticz(e){return this.__generic("GET",this.endpoint,e)}__generic(e,t,i,n){}}class r extends s{async __generic(e,t,i,n=null){const s=Object.entries(i).reduce(((e,[t,i])=>`${e}&${encodeURI(t)}=${encodeURI(i)}`),""),r={method:e,headers:{Accept:"application/json","Content-Type":"application/json"},body:n?JSON.stringify(n):null},o=await fetch(`${t}${s}`,r);return await o.json()}}const o={LIGHT:"light",WEATHER:"wheather",TEMP:"temp",UTILITY:"utility",WIND:"wind",RAIN:"rain",UV:"uv",BARO:"baro",ZWAVEALARM:"zwavealarm",ALL:"all"},a={STABLE:0,SUNNY:1,CLOUDY:2,UNSABLE:3,THUNDERSTORM:4,UNKNOWN:5,CLOUDY_RAIN:6},c={HEAVY_SNOW:0,SNOW:1,HEAVY_RAIN:2,RAIN:3,CLOUDY:4,SOME_CLOUDS:5,SUNNY:6,UNKNOWN:7,UNSTABLE:8,STABLE:9};function d(e){return{items:()=>e.devices({used:!0,displayhidden:1}),getByIdx:t=>e.devices({rid:t}),getByType:(t,i="Name")=>!!function(e,t){const i=null!=Object.values(e).find((e=>e==t));return i||console.log("DeviceType not found",t),i}(o,t)&&e.devices({filter:t,used:!0,order:i}),getFavorites:()=>e.devices({used:!0,filter:"all",favorite:1}),switch:(t,i="On")=>e.command({param:"switchlight",idx:t,switchcmd:"on"===i.toLowerCase()?"On":"Off"}),toggle:t=>e.command({param:"switchlight",idx:t,switchcmd:"Toggle"}),rename:(t,i)=>e.command({param:"renamedevice",idx:t,name:i}),protect:(t,i=!0)=>e.setUsed({used:!0,idx:t,protected:i?"true":"false"}),updateTemperature(e,t){return this.updateDevice(e,t)},updateHumidity(e,t,i){return t<0||t>100||i<0||i>5?null:this.updateDevice(e,i,t)},async updateBarometer(e,t,i){return this.updateDevice(e,`${t};${i}`)},updateDevice:(t,i,n=0)=>e.command({param:"udevice",idx:t,svalue:i,nvalue:n})}}function u(e){return{items:()=>e.cameras()}}function m(e){return{items:()=>e.events({param:"list"})}}function p(e){return{items:()=>e.scenes(),switch:(t,i)=>e.command({param:"switch",idx:t,switchcmd:i}),toggle(e){return this.switch(e,"Toggle")}}}const l={NULL:"<null>",BROWSER:"browser",FCM:"fcm",HTTP:"http",KODI:"kodi",LMS:"lms",NMA:"nma",PROWL:"prowl",PUSHALOT:"pushalot",PUSHBULLET:"pushbullet",PUSHOVER:"pushover",PUSHSAFER:"pushsafer",TELEGRAM:"telegram"};function h(e){return{send(t,i,n=""){const s={param:"sendnotification",subject:t,body:i};if(""!=n){if(r=n,null==Object.values(l).find(r))return;s.subSystem=n}var r;return e.command(s)}}}function v(e){return{log:t=>e.command({param:"addlogmessage",message:`DOMOTICZ API : ${t}`}),version:()=>e.command({param:"getversion"}),datetimes:()=>e.command({param:"getSunRiseSet"}),reboot:()=>e.command({param:"system_reboot"}),shutdown:()=>e.command({param:"system_shutdown"}),db_backup:()=>e.get("backupdatabase.php"),db_vaccum:()=>e.command({param:"vaccumdatabase"})}}function f(e,t){const i=t?.api?new t.api(e,t):new r(e,t);return{cameraManager:u(i),deviceManager:d(i),eventManager:m(i),notificationManager:h(i),sceneManager:p(i),systemManager:v(i)}}DomoticzApi=t})();