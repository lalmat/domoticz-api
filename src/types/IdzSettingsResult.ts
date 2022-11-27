import { IdzPosition } from './IdzPosition'

export interface IdzSettingsResult {
  AcceptNewHardware: Number
  ActiveTimerPlan: Number
  AllowWidgetOrdering: Number
  AuthenticationMethod: Number
  BatterLowLevel: Number
  CM113DisplayType: Number
  ClickatellAPI: String
  ClickatellEnabled: Boolean
  ClickatellFrom: String
  ClickatellTo: String
  CostEnergy: Number
  CostEnergyR1: Number
  CostEnergyR2: Number
  CostEnergyT2: Number
  CostGas: Number
  CostWater: Number
  DashboardType: Number
  DegreeDaysBaseTemperature: Number
  DisableDzVentsSystem: Number
  DoorbellCommand: Number
  DzVentsLogLevel: Number
  ElectricVoltage: Number
  EmailAsAttachment: Number
  EmailEnabled: Number
  EmailFrom: String
  EmailPassword: String
  EmailPort: Number
  EmailServer: String
  EmailTo: String
  EmailUsername: String
  EnableEventScriptSystem: Number
  EnableTabCustom: Number
  EnableTabFloorplans: Number
  EnableTabLights: Number
  EnableTabScenes: Number
  EnableTabTemp: Number
  EnableTabUtility: Number
  EnableTabWeather: Number
  EnergyDivider: Number
  EventSystemLogFullURL: Number
  FCMEnabled: Number
  FloorplanActiveOpacity: Number
  FloorplanAnimateZoom: Number
  FloorplanFullscreenMode: Number
  FloorplanInactiveOpacity: Number
  FloorplanPopupDelay: Number
  FloorplanRoomColour: String
  FloorplanShowSceneNames: Number
  FloorplanShowSensorValues: Number
  FloorplanShowSwitchValues: Number
  GasDivider: Number
  HTTPEnabled: String
  HTTPField1: String
  HTTPField2: String
  HTTPField3: String
  HTTPField4: String
  HTTPPostContentType: String
  HTTPPostData: String
  HTTPPostHeaders: String
  HTTPTo: String
  HTTPURL: String
  HideDisabledHardwareSensors: Boolean
  IFTTTAPI: String
  IFTTTEnabled: Number
  KodiEnabled: String
  KodiIPAddress: String
  KodiPort: Number
  KodiTimeToLive: Number
  Language: String
  LightHistoryDays: Number
  LmsDuration: Number
  LmsEnabled: Boolean
  LmsPlayerMac: String
  Location: IdzPosition
  LogEventScriptTrigger: Number
  MaxElectricPower: Number
  MobileType: Number
  MyDomoticzSubsystems: Number
  MyDomoticzUserId: String
  NotificationSensorInterval: Number
  NotificationSwitchInterval: Number
  ProtectionPassword: String
  ProwlAPI: String
  ProwlEnabled: Boolean
  PushALotAPI: String
  PushALotEnabled: Boolean
  PushbulletAPI: String
  PushbulletEnabled: Boolean
  PushoverAPI: String
  PushoverEnabled: Boolean
  PushoverUser: String
  PushsaferAPI: Boolean
  PushsaferEnabled: Boolean
  PushsaferImage: String
  RandomTimerFrame: Number
  RaspCamParams: String
  ReleaseChannel: Number
  RemoteSharedPort: Number
  SecOnDelay: Number
  SecPassword: String
  SendErrorsAsNotification: Number
  SensorTimeout: Number
  ShortLogDays: Number
  ShortLogInterval: Number
  ShowUpdateEffect: Number
  SmartMeterType: Number
  TelegramAPI: String
  TelegramChat: String
  TelegramEnabled: Boolean
  TempUnit: Number
  Title: String
  UVCParams: String
  UseAutoBackup: Number
  UseAutoUpdate: Number
  UseEmailInNotifications: String
  WaterDivider: Number
  WebLocalNetworks: String
  WebRemoteProxyIPs: String
  WebTheme: String
  WebUserName: String
  WeightUnit: Number
  WindUnit: Number
  cloudenabled: Boolean
  status: String
  title: String
}