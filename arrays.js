var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [1]
  array.unshift("foo")
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = [1]
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array,element){
  array = [1];
  array.push("foo");
  return array;
}