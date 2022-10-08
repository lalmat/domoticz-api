function b64encode(data) {
  return (typeof window === 'undefined') ? Buffer.from(data, 'base64') : btoa(data)
}

export {
  b64encode
}
