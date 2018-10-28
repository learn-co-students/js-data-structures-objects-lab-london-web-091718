// Write your solution in this file!
const driver = {};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const new_driver = Object.assign({}, driver, {[key]: value}); //this must be all in square bracket notation, as strings are passed in.
  return new_driver;
}


function deleteFromDriverByKey(driver, key) {
  const new_driver = Object.assign({}, driver); // important to declare empty object first, else it will end up being a destructive method when you use Object.assign();
  delete new_driver[key]
  return new_driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver;
}
