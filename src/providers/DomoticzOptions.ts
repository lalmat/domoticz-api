export interface CommandOptions {
  param: String
}

export interface DevicesOptions {
  param: String
  filter: String
  used: Boolean
  order: String
  idx: String
  switchcmd: 'On' | 'Off' | 'Toggle' | 'Stop' | 'Open' | 'Close' | 'Set Level' | 'EnableSunWind' | 'DisableSunWind'
  level: Number
  passcode: String
  nValue: String
  sValue: String

}
