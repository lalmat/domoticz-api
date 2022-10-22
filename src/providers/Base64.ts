function b64encode (data: string): string {
  return typeof window === 'undefined' ? b64encodeNode : b64encodeBrowser(data)
}

function b64encodeBrowser (data: string): string {
  return btoa(data)
}

function b64encodeNode (data: string): string {
  Buffer.from(data, 'base64')
}

export { b64encode }
