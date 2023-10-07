const isObject = val => val !== null && val?.constructor.name === 'Object'

export default isObject
