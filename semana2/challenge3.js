function arrayOfMultiples (num, length) {
  // return 0;
  let arrayToReturn = [];
  let numToAppend = 0;
  for (let i = 0; i < length; i++){
    numToAppend = numToAppend + num;
    arrayToReturn.push(numToAppend);
  }
  return(arrayToReturn);
}

module.exports = arrayOfMultiples;

// arrayOfMultiples(12, 10);