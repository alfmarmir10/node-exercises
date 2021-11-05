function landMass(country, countryArea) {
    //Implementación
    // return 0;
    const earthArea = 148940000;
    let percentage = countryArea / earthArea;
    percentage = (percentage * 100).toFixed(2);
    const objToReturn = { "percent": Number(percentage), "message": `${country} representa el ${percentage}% de la masa de la tierra` };
    return(objToReturn);

}

module.exports = landMass;

// landMass("Rusia", 17098242);