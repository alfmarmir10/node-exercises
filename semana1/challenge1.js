const reverseString = (str) => {
    //Implementación
    if(str.length > 15 || str.length <=1){
        throw new Error("Error: Tipo de dato o longitud no admitidos");
    }
    // console.log(typeof(str));
    if(typeof(str)!=="string"){
        throw new Error("Error: Tipo de dato o longitud no admitidos");
    }
    const array = str.split('').reverse().join('');
    // console.log(array);
    return array;
}

module.exports = {
    reverseString
}

// reverseString("Hello World");