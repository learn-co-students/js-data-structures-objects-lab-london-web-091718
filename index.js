// Write your solution in this file!
const driver = {}

// it does not modify the original driver,
// but rather returns a clone with the new data
function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = { ...driver}
  newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  newDriver = {}
  delete driver.key
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
