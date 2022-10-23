import { DOMOTICZ_SWITCHCMD, DOMOTICZ_TIMER_TYPE } from '../../enums/Domoticz'

export interface ICommandOptions {
  // type: 'command'
  param:
  'device_list' | 'addlogmessage' | 'getsecstatus' | 'getversion' |
  'getServerTime' | 'switch' |
  'getSunRiseSet' |
  'sendnotification' |
  'vaccumdatabase' |
  'allownewhardware' |
  'getlightswitches' | 'switchlight' |
  'EnableSunWind' | 'DisableSunWind' |
  'udevice' | 'renamedevice' |
  'setcolbrightnessvalue' | 'setkelvinlevel' |
  'addcamera' | 'updatecamera' | 'emailcamerasnapshot' |
  'switchscene' | 'getscenedevices' | 'addscenedevice' | 'deletescenedevice' | 'getsceneactivations' | 'addscenetimer' |
  'setsetpoint' |
  'system_reboot' | 'system_shutdown'
  subject?: String
  message?: String
  body?: String
  subsystem?: String
  extradata?: String
  timeout?: Number
  idx?: Number
  switchcmd?: DOMOTICZ_SWITCHCMD
  level?: Number
  passcode?: String
  nvalue?: String
  svalue?: String
  hue?: Number
  hex?: String
  brightness?: Number
  iswhite?: Boolean
  color?: Object
  kelvin?: Number
  address?: String
  port?: Number
  name?: String
  enabled?: Boolean
  imageurl?: String
  protocol?: Number
  camidx?: String
  setpoint?: Number
  isscene?: Boolean
  devidx?: Number
  command?: String
  cmnd?: String
  active?: Boolean
  timertype?: DOMOTICZ_TIMER_TYPE
  date?: String
  hour?: String
  min?: String
  randomness?: Boolean
  days?: String
}
