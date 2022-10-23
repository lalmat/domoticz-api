import { DOMOTICZ_EVOHOME_OOC } from './../../enums/DomoticzEvohomeOOC'
import { DOMOTICZ_EVOHOME_STATUS } from './../../enums/DomoticzEvohomeStatus'
import { DOMOTICZ_EVOHOME_ACTIONS } from './../../enums/DomoticzEvohomeAction'
import { DOMOTICZ_USER_VARIABLE } from './../../enums/DomotizUserVariable'
import { DOMOTICZ_SECURITY_STATUS } from './../../enums/DomoticzSecurityStatus'
import {
  DOMOTICZ_LOG_LEVEL,
  DOMOTICZ_NOTIFICATOR,
  DOMOTICZ_SWITCHCMD,
  DOMOTICZ_TIMER_TYPE
} from '../../enums/Domoticz'
import { DOMOTICZ_COMMAND_PARAM } from '../../enums/DomoticzCommandParam'

export interface ICommandOptions {
  // type: 'command'
  param: DOMOTICZ_COMMAND_PARAM
  subject?: string
  message?: string
  body?: string
  subsystem?: string
  extradata?: string
  timeout?: number
  idx?: number
  switchcmd?: DOMOTICZ_SWITCHCMD
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
  timertype?: DOMOTICZ_TIMER_TYPE
  date?: string
  hour?: string
  min?: string
  randomness?: boolean
  days?: string
  lastlogtime?: string
  loglevel?: DOMOTICZ_LOG_LEVEL
  sceneidx?: number
  scenetype?: string
  onaction?: string
  offaction?: string
  htype?: number
  used?: boolean
  secstatus?: DOMOTICZ_SECURITY_STATUS
  seccode?: string
  vname?: string
  vtype?: DOMOTICZ_USER_VARIABLE
  vvalue?: string
  event?: string
  data?: string
  ActiveTimerPlan?: number
  fromdate?: string
  todate?: string
  tmsg?: string
  tpriority?: number
  tsendalways?: boolean
  tsystems?: DOMOTICZ_NOTIFICATOR[]
  tvalue?: number
  twhen?: number
  ttype?: string
  action?: DOMOTICZ_EVOHOME_ACTIONS
  status?: DOMOTICZ_EVOHOME_STATUS
  ooc?: DOMOTICZ_EVOHOME_OOC
  until?: string
  valuelist?: string
}
