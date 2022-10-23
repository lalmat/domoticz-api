export function b64encode (data) { return typeof window === 'undefined' ? b64encodeNode : b64encodeBrowser(data) }
function b64encodeBrowser (data) { return btoa(data) }
function b64encodeNode (data) { Buffer.from(data, 'base64') }
