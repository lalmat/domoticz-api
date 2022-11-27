import { DomoticzApiConnector } from './DomoticzApiConnector'
import md5 from 'blueimp-md5'

class DomoticzApiFetch extends DomoticzApiConnector {
  async __generic (method: string, endpoint: string, data?: Object, content?: any): Promise<any> {
    const uriParams = (data !== undefined) ? dataToURI(data) : ''
    const options = {
      method,
      headers : {
        Accept         : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : (content !== undefined) ? JSON.stringify(content) : null
    }
    const url = `${endpoint}${uriParams}`
    console.log(url, options)
    const result = await fetch(url, options)
    return await result.json()
  }

  async __login (username: string, password: string, rememberMe: boolean): Promise<any> {
    const url = 'json.htm?type=command&param=logincheck'
    const options = {
      method  : 'POST',
      headers : {
        Accept         : 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body : JSON.stringify({
        username   : encodeURIComponent(btoa(username)),
        password   : encodeURIComponent(md5(password)),
        rememberme : rememberMe
      })
    }
    const result = await fetch(url, options)
    return await result.json()
  }
}

function dataToURI (data: Object): string {
  return Object.entries(data).reduce((uri: string, [key, value]) => {
    const valueStr = castToString(value)
    return `${uri}&${encodeURI(key)}=${encodeURI(valueStr)}`
  }, '')
}

function castToString (value: unknown): string {
  if (typeof value === 'string') return value
  if (typeof value === 'boolean') return (value) ? 'true' : 'false'
  if (typeof value === 'number') return '' + value.toString()
  return ''
}

export { DomoticzApiFetch }
