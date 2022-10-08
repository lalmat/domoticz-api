import { DomoticzApiProvider } from "./DomoticzApiProvider.js";

class DomoticzApiProviderFetch extends DomoticzApiProvider {

  async __generic(method, endpoint, data, content = null) {
    const uriParams = Object.entries(data).reduce((uri, [key, value]) => {
      return `${uri}&${encodeURI(key)}=${encodeURI(value)}`
    }, '')

    const options = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: (content) ? JSON.stringify(content) : null
    }

    const result = await fetch(`${endpoint}${uriParams}`, options)
    return await result.json();
  }
}

export {
  DomoticzApiProviderFetch
}
