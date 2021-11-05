const capitalizeLetters = (str) => {
    //Implementación
    const words = str.split(" ");
    let newArray = [];
    for(let i = 0; i < words.length; i++){
        const lowerCase = words[i].toLowerCase();
        const upperCaseWord = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);         
        newArray.push(upperCaseWord);
        // newArray.push(" ");
    }
    return newArray.join(' ');

}

module.exports = {
    capitalizeLetters
}

// capitalizeLetters("JOHN Doe's iPhone6");