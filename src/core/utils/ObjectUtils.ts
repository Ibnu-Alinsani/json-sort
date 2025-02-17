function isObjectType(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export { isObjectType }
