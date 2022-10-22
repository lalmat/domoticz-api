import {
  TIMERTYPE_BEFORE_SUNRISE,
  TIMERTYPE_AFTER_SUNRISE,
  TIMERTYPE_ON_TIME,
  TIMERTYPE_BEFORE_SUNSET,
  TIMERTYPE_AFTER_SUNSET,
  TIMERTYPE_FIXED_DATETIME
} from '../Types/ITimerTypes'

export interface CommandOptions {
  type: 'command'
  param:
  'device_list' |
  'getServerTime' |
  'getSunRiseSet' |
  'sendnotification' |
  'vacuumdatabase' |
  'allownewhardware' |
  'getlightswitches' | 'switchlight' |
  'EnableSunWind' | 'DisableSunWind' |
  'udevice' |
  'setcolbrightnessvalue' | 'setkelvinlevel' |
  'addcamera' | 'updatecamera' | 'emailcamerasnapshot' |
  'switchscene' | 'getscenedevices' | 'addscenedevice' | 'deletescenedevice' | 'getsceneactivations' | 'addscenetimer' |
  'setsetpoint' |
  'system_reboot' | 'system_shutdown'
  subject: String
  body: String
  subsystem: String
  extradata: String
  timeout: Number
  idx: Number
  switchcmd: 'On' | 'Off' | 'Toggle' | 'Stop' | 'Open' | 'Close' | 'Stop' | 'Set Level'
  level: Number
  passcode: String
  nValue: String
  sValue: String
  hue: Number
  hex: String
  brightness: Number
  iswhite: Boolean
  color: Object
  kelvin: Number
  address: String
  port: Number
  name: String
  enabled: Boolean
  imageurl: String
  protocol: Number
  camidx: String
  setpoint: Number
  isscene: Boolean
  devidx: Number
  command: String
  cmnd: String
  active: Boolean
  timertype: TIMERTYPE_BEFORE_SUNRISE | TIMERTYPE_AFTER_SUNRISE | TIMERTYPE_ON_TIME | TIMERTYPE_BEFORE_SUNSET | TIMERTYPE_AFTER_SUNSET | TIMERTYPE_FIXED_DATETIME
  date: String
  hour: String
  min: String
  randomness: Boolean
  days: String
}
