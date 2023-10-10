const capitalizeString = val => val
  .split(' ')
  .map(val => `${val[0].toUpperCase()}${val.slice(1)}`)
  .join(' ')

export default capitalizeString
