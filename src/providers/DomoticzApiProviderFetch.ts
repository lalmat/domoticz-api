import { DomoticzApiProvider } from './DomoticzApiProvider.js'

class DomoticzApiProviderFetch extends DomoticzApiProvider {
  async __generic (method: string, endpoint: string, data: object, content = null) {
    const uriParams = data
      ? Object.entries(data).reduce((uri, [key, value]) => {
        return `${uri}&${encodeURI(key)}=${encodeURI(value)}`
      }, '')
      : ''

    const options = {
      method,
      headers : {
        Accept         : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : content ? JSON.stringify(content) : null
    }
    const url = `${endpoint}${uriParams}`
    const result = await fetch(url, options)
    return await result.json()
  }
}

export { DomoticzApiProviderFetch }
