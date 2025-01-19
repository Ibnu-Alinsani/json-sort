import { isObjectType, isArrayType } from './utils'
import { SortDirection } from './enums'

function f(object: any, direction: SortDirection): any {
  if (object === null || object === undefined) return object

  let result: any = []

  const keys = Object.keys(object)

  for (let i = 0; i < keys.length; i++) {
    let currentValue = object[keys[i]]

    function doSorting() {
      for (let j = 0; j < keys.length; j++) {
        console.log('Direction is: ', direction)
        const jNow = keys[j]
        const jNext = keys[j + 1]

        function doSwap() {
          const temp = keys[j]
          keys[j] = keys[j + 1]
          keys[j + 1] = temp
        }

        if (direction === SortDirection.ASC) {
          if (jNow > jNext) doSwap()
        } else if (direction === SortDirection.DESC) {
          if (jNow < jNext) doSwap()
        }
      }
    }

    if (isObjectType(currentValue)) {
      // call this function again
      object[keys[i]] = f(currentValue, direction)
    } else if (isArrayType(currentValue)) {
      for (let j = 0; j < currentValue.length; j++) {
        // just make recursive, when current value of array is Object type
        if (isObjectType(currentValue[j])) {
          currentValue[j] = f(currentValue[j], direction)
        }
      }
    }

    // do sorting
    doSorting()
  }

  if (isObjectType(object)) result = reorderedFields(object, keys)

  return result
}

function reorderedFields(obj: any, newOrder: string[]): string {
  const reorderedFields: any = {}
  newOrder.forEach((key) => {
    if (key in obj) reorderedFields[key] = obj[key]
  })

  return reorderedFields
}

// const finalResult = JSON.stringify(f(sample1, SortDirection.ASC), null, 2)

// console.log('finalResult', finalResult)

export default f
