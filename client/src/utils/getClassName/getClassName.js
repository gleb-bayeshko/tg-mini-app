import { isObject, isString } from '../index'

/**
 * The function turns the arguments, which can be either strings or objects,
 * into a single-string css class name. The strings are interpreted as css class names and go into the
 * final string unchanged. The object is interpreted as a collection of key-value pairs,
 * where the key is the css class name and the value is a boolean variable indicating whether
 * the class name should be added to the resulting string.
 * @param {...*} args - arguments, which will be converted into single string
 * @return {string} - single-string class name
 */
export const getClassName = (...args) => {
  const classNames = []

  args.forEach(el => {
    if (isString(el)) {
      classNames.push(el)

      return
    }

    if (isObject(el)) {
      const entries = Object.entries(el)

      entries.forEach(([className, shouldAdd]) => {
        if (shouldAdd) {
          classNames.push(className)
        }
      })
    }
  })

  return classNames.join(' ')
}
