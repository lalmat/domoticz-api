import {
  EDZ_EVOHOME_OOC,
  EDZ_EVOHOME_STATUS,
  EDZ_EVOHOME_ACTIONS,
  EDZ_USER_VARIABLE,
  EDZ_SECURITY_STATUS,
  EDZ_LOG_LEVEL,
  EDZ_NOTIFICATOR,
  EDZ_SWITCH_COMMAND,
  EDZ_TIMER_TYPE,
  EDZ_COMMAND_PARAM
} from './index'

export interface IdzCommandOptions {
  // type: 'command'
  param: EDZ_COMMAND_PARAM
  subject?: string
  message?: string
  body?: string
  subsystem?: string
  extradata?: string
  timeout?: number
  idx?: number
  switchcmd?: EDZ_SWITCH_COMMAND
  level?: number
  passcode?: string
  nvalue?: string
  svalue?: string
  hue?: number
  hex?: string
  brightness?: number
  iswhite?: boolean
  color?: Object
  kelvin?: number
  address?: string
  port?: number
  name?: string
  enabled?: boolean
  imageurl?: string
  protocol?: number
  camidx?: string
  setpoint?: number
  isscene?: boolean
  devidx?: number
  command?: string
  cmnd?: string
  active?: boolean
  timertype?: EDZ_TIMER_TYPE
  date?: string
  hour?: string
  min?: string
  randomness?: boolean
  days?: string
  lastlogtime?: string
  loglevel?: EDZ_LOG_LEVEL
  sceneidx?: number
  scenetype?: string
  onaction?: string
  offaction?: string
  htype?: number
  used?: boolean
  secstatus?: EDZ_SECURITY_STATUS
  seccode?: string
  vname?: string
  vtype?: EDZ_USER_VARIABLE
  vvalue?: string
  event?: string
  data?: string
  ActiveTimerPlan?: number
  fromdate?: string
  todate?: string
  tmsg?: string
  tpriority?: number
  tsendalways?: boolean
  tsystems?: EDZ_NOTIFICATOR[]
  tvalue?: number
  twhen?: number
  ttype?: string
  action?: EDZ_EVOHOME_ACTIONS
  status?: EDZ_EVOHOME_STATUS
  ooc?: EDZ_EVOHOME_OOC
  until?: string
  valuelist?: string
  rememberme?: boolean
}
