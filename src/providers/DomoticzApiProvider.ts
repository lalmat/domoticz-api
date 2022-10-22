import { ISceneResult } from './../domoticz/interfaces/Scenes/IScenesResult'
import { IEventsOptions } from './../domoticz/interfaces/Events/IEventsOptions'
import { IDevicesResult } from './../domoticz/interfaces/Devices/IDevicesResult'
import { IDevicesOptions } from './../domoticz/interfaces/Devices/IDevicesOptions'
import { ICamerasResult } from './../domoticz/interfaces/Cameras/ICamerasResult'
import { ICommandOptions } from '../domoticz/interfaces/Command/ICommandOptions'

import { b64encode } from './Base64.js'

interface DomoticzApiProviderConfig {
  hostname: string
  username: string
  password: string
  useSSL: boolean
  port: number
}

class DomoticzApiProvider {
  hostname: string = ''
  username: string = ''
  password: string = ''
  useSSL: boolean
  port: number
  endpoint: string = ''

  constructor ({ hostname, username, password, useSSL, port }: DomoticzApiProviderConfig) {
    this.hostname = hostname
    this.username = username
    this.password = password
    this.useSSL = useSSL
    this.port = port
    this.endpoint = this.url('json.htm')
  }

  url (uri: string): string {
    const proto = `http${this.useSSL ? 's' : ''}://`
    const host = this.hostname
    const port = (this.port > 0) ? this.port : (this.useSSL ? 443 : 80)

    const credentials =
      this.username !== '' && this.password !== ''
        ? `?username=${b64encode(this.username)}&password=${b64encode(this.password)}`
        : '?username=&password='

    return `${proto}${host}:${port}/${uri}${credentials}`
  }

  // DOMOTICZ NATIVE CALLS
  async cameras (): Promise<ICamerasResult> {
    return await this.domoticz({ type: 'cameras' }) as ICamerasResult
  }

  async command (data: ICommandOptions): Promise<Object> {
    return await this.domoticz({ type: 'command', ...data })
  }

  async devices (data: IDevicesOptions): Promise<IDevicesResult> {
    return await this.domoticz({ type: 'devices', ...data }) as IDevicesResult
  }

  async events (data: IEventsOptions): Promise<Object> {
    return await this.domoticz({ type: 'events', ...data })
  }

  async notifications (data: Object): Promise<Object> {
    return await this.domoticz({ type: 'notifications', ...data })
  }

  async scenes (): Promise<ISceneResult> {
    return await this.domoticz({ type: 'scenes' }) as ISceneResult
  }

  async setUsed (data: Object): Promise<Object> {
    return await this.domoticz({ type: 'setUsed', ...data })
  }

  async checkCredentials (): Promise<Object> {
    return await this.__generic('GET', `${this.url('json.htm')}?api-call`)
  }

  // TOOLING
  async get (uri: string): Promise<Object> {
    return await this.__generic('GET', this.url(`${uri}`))
  }

  async domoticz (data: Object): Promise<Object> {
    return await this.__generic('GET', this.endpoint, data)
  }

  // Want to write an new HTTP manager (other than fetch) just create a new
  // DomoticzApiProvider[foobar].js and implement only this method.
  async __generic (method: string, endpoint: string, data?: Object, content?: string): Promise<Object> {
    return await new Promise(() => null)
  }
}

export { DomoticzApiProvider }
