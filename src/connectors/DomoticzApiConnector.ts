import { IdzResult } from '../types/IdzResult'
import { IdzScenesResult } from '../types/IdzScenesResult'
import { IdzEventsOptions } from '../types/IdzEventsOptions'
import { IdzDevicesResult } from '../types/IdzDevicesResult'
import { IdzDevicesOptions } from '../types/IdzDevicesOptions'
import { IdzCamera } from '../types/IdzCamera'
import { IdzCommandOptions } from '../types/IdzCommandOptions'

import { b64encode } from '../libs/Base64.js'

interface DomoticzApiOptions {
  DomoticzApi?: typeof DomoticzApiConnector
  hostname: string
  port?: number
  username?: string
  password?: string
  useSSL?: boolean
}

class DomoticzApiConnector {
  hostname: string = ''
  username: string = ''
  password: string = ''
  useSSL: Boolean
  port: Number
  endpoint: String = ''

  constructor (options: DomoticzApiOptions) {
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
  async cameras (): Promise<IdzResult<IdzCamera>> {
    return await this.domoticz({ type: 'cameras' })
  }

  async command (data: IdzCommandOptions): Promise<any> {
    return await this.domoticz({ type: 'command', ...data })
  }

  async hardware (): Promise<any> {
    return await this.domoticz({ type: 'hardware' })
  }

  async devices (data: IdzDevicesOptions): Promise<IdzDevicesResult> {
    return await this.domoticz({ type: 'devices', ...data })
  }

  async events (data: IdzEventsOptions): Promise<Object> {
    return await this.domoticz({ type: 'events', ...data })
  }

  async notifications (data: Object): Promise<Object> {
    return await this.domoticz({ type: 'notifications', ...data })
  }

  async scenes (): Promise<IdzScenesResult> {
    return await this.domoticz({ type: 'scenes' })
  }

  async setUsed (data: Object): Promise<IdzResult<null>> {
    return await this.domoticz({ type: 'setUsed', ...data })
  }

  async checkCredentials (): Promise<IdzResult<null>> {
    return await this.__generic('GET', `${this.url('json.htm')}?api-call`)
  }

  // TOOLING
  async get (uri: string): Promise<any> {
    return await this.__generic('GET', this.url(`${uri}`))
  }

  async domoticz (data: Object): Promise<any> {
    return await this.__generic('GET', this.endpoint.toString(), data)
  }

  // Want to write an new HTTP manager (other than fetch) just create a new
  // DomoticzApiProvider[foobar].js and implement only this method.
  // @ts-expect-error
  async __generic (method: string, endpoint: string, data?: Object, content?: string): Promise<any> {
    return await new Promise(() => null)
  }
}

export {
  DomoticzApiOptions,
  DomoticzApiConnector
}
