function iterativeLog(array) {
  array.forEach((element,index) => {
  console.log(`${index}: ${element}`)
})}
function iterate(callback) {
  array=['dogs','cats'];
  array.forEach(callback);
  return array
}
function doToArray(array, callback) {
  array.forEach(callback)
}

/*
evens.forEach((even, index, array) => {
  debugger
  console.log(`${even} is not odd!`)
})

*/
