function divisibleByLeft(n) {
    //Implementación
    // return 0;
    const arrayNums = n.toString().split('');
    let arrayToReturn = [];
    for (let i = 0; i < arrayNums.length; i++){
        if (i == 0) {
            arrayToReturn.push(false);
        } else {
            if (arrayNums[i] % arrayNums[i - 1] === 0) {
                arrayToReturn.push(true);
            } else {
                arrayToReturn.push(false);
            }
        }
    }
    return(arrayToReturn);
}

module.exports = divisibleByLeft;
// divisibleByLeft(73312);