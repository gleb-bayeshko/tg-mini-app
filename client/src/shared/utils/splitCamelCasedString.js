const regex = /([a-z0-9])([A-Z])/g

const splitCamelCasedString = val => val.replace(regex, '$1 $2')

export default splitCamelCasedString
