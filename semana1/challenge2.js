const reverseInt = (number) => {
    //Implementación
    if(number % 1 === 0){
        const array = number.toString().split('').reverse();
        let arraySinCeros = array.filter(item => item!=='0');
        if(arraySinCeros[arraySinCeros.length-1]==="-"){
            arraySinCeros.pop();
            arraySinCeros.unshift("-");
        }
        return Number(arraySinCeros.join(''));
    }

    throw new Error("Error: Tipo de dato no admitido.");
}

module.exports = {
    reverseInt
}

// reverseInt('a')