// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, address, value) {
  const ob1 = Object.assign({}, obj, {address: value});
  return ob1
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  const ob2 = Object.assign(obj, {address: value})
  return ob2
}

function deleteFromDriverByKey(obj, key) {
  const ob3 = Object.assign({}, obj)
  delete ob3[key];
  return ob3
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  const ob4 = obj;
  delete ob4[key];
  return ob4
}
