import { b64encode } from './Base64.js';

class DomoticzApiProvider {
  #hostname
  #username
  #password
  #useSSL
  #port

  constructor(hostname, {username, password, useSSL, port}) {
    this.hostname = hostname
    this.username = username
    this.password = password
    this.useSSL   = useSSL
    this.port     = port
    this.endpoint = this.url('json.htm?_connector=domoticz-api')
  }

  url(uri) {
    const proto = `http${this.useSSL?'s':''}://`
    const host = this.hostname
    const port = (this.port) ? this.port : (this.useSSL ? 443 : 80)
    const credentials = `&username=${b64encode(this.username)}&password=${b64encode(this.password)}`
    return `${proto}${host}:${port}/${uri}${credentials}`
  }

  // DOMOTICZ NATIVE CALLS
  cameras(data) { return this.domoticz({type: 'cameras', ...data}) }
  command(data) { return this.domoticz({type: 'command', ...data}) }
  devices(data) { return this.domoticz({type: 'devices', ...data}) }
  events(data) { return this.domoticz({type: 'events', ...data}) }
  notifications(data) { return this.domoticz({type: 'notifications', ...data}) }
  scenes(data) { return this.domoticz({type: 'scenes', ...data}) }
  setUsed(data) { return this.domoticz({type: 'setUsed', ...data}) }

  // TOOLING
  get(uri) { return this.__generic('GET', this.url(uri)) }
  domoticz(data) { return this.__generic('GET', this.endpoint, data); }

  // Want to write an new HTTP manager (other than fetch) just create a new
  // DomoticzApiProvider[foobar].js and implement only this method.
  __generic(method, endpoint, data, content = null) {}
}

export {
  DomoticzApiProvider
}
