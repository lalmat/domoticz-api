import { DomoticzApiProvider } from './DomoticzApiProvider.js'

class DomoticzApiProviderFetch extends DomoticzApiProvider {
  async __generic (method: string, endpoint: string, data?: Object, content?: string): Promise<Object> {
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

export { DomoticzApiProviderFetch }
