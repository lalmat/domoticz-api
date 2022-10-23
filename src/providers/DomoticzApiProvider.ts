import { ISceneResult } from '../interfaces/Scenes/IScenesResult'
import { IEventsOptions } from '../interfaces/Events/IEventsOptions'
import { IDevicesResult } from '../interfaces/Devices/IDevicesResult'
import { IDevicesOptions } from '../interfaces/Devices/IDevicesOptions'
import { ICamerasResult } from '../interfaces/Cameras/ICamerasResult'
import { ICommandOptions } from '../interfaces/Command/ICommandOptions'

import { b64encode } from '../libs/Base64.js'

interface DomoticzOptions {
  DomoticzApi?: typeof DomoticzApiProvider
  hostname: string
  port?: number
  username?: string
  password?: string
  useSSL?: boolean
}

class DomoticzApiProvider {
  hostname: string = ''
  username: string = ''
  password: string = ''
  useSSL: Boolean
  port: Number
  endpoint: String = ''

  constructor (options: DomoticzOptions) {
    this.hostname = options.hostname
    this.username = (options.username != null) ? options.username : ''
    this.password = (options.password != null) ? options.password : ''
    this.useSSL = (options.useSSL != null) ? options.useSSL : false
    this.port = (options.port != null) ? options.port : 80
    this.endpoint = this.url('json.htm')
  }

  url (uri: string): string {
    const proto = `http${this.useSSL === true ? 's' : ''}://`
    const host = this.hostname
    const port = (this.port > 0) ? this.port : (this.useSSL === true ? 443 : 80)

    const username = this.username !== undefined ? b64encode(this.username) : ''
    const password = this.password !== undefined ? b64encode(this.password) : ''

    const credentials = `?username=${username.toString()}&password=${password.toString()}`
    return `${proto}${host}:${port.toString()}/${uri}${credentials}`
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
    return await this.__generic('GET', this.endpoint.toString(), data)
  }

  // Want to write an new HTTP manager (other than fetch) just create a new
  // DomoticzApiProvider[foobar].js and implement only this method.
  async __generic (method: string, endpoint: string, data?: Object, content?: string): Promise<Object> {
    return await new Promise(() => null)
  }
}

export {
  DomoticzOptions,
  DomoticzApiProvider
}
