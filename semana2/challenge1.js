function twoSums(numbs, target) {
  const arrayToReturn = [];
  for (let i = 0; i < numbs.length; i++){
    const a = i;
    for (let x = 0; x < numbs.length; x++){
      if (arrayToReturn.length == 0 && x != a && (numbs[a] + numbs[x]) === target) {
        arrayToReturn.push(a);
        arrayToReturn.push(x);
      }
    }
  }
  return(arrayToReturn);
}

module.exports = twoSums;
// twoSums([3,3], 6);