let isValidPassphrase = (text) => {
   
    if (!text) {
        return false; 
    }

    let words = text.split(' ');

    let minimumFourWords = words.length >= 4;

    let minimumTwoCharsEach = words.every(word => word.length >= 2);

    let conditionsSatisfied = minimumFourWords && minimumTwoCharsEach;

    return conditionsSatisfied;
}
