import { CameraResult } from './../domoticz/Cameras/DomoticzCamera'
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
  async cameras (): Promise<CameraResult> {
    return await this.domoticz({ type: 'cameras' }) as CameraResult
  }

  async command (data) {
    return await this.domoticz({ type: 'command', ...data })
  }

  async devices (options) {
    return await this.domoticz({ type: 'devices', ...options })
  }

  async events (data) {
    return await this.domoticz({ type: 'events', ...data })
  }

  async notifications (data) {
    return await this.domoticz({ type: 'notifications', ...data })
  }

  async scenes (data) {
    return await this.domoticz({ type: 'scenes', ...data })
  }

  async setUsed (data) {
    return await this.domoticz({ type: 'setUsed', ...data })
  }

  async checkCredentials () {
    return await this.__generic('GET', `${this.url('json.htm')}&api-call`)
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
