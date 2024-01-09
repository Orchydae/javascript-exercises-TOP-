const sumAll = function(number1, number2) {
    
    if (number1 < 0 || number2 < 0) {
        return "ERROR";
    } else if (typeof number1 != "number" || typeof number2 != "number") {
        return "ERROR";
    }

    let smallestNumber = Math.min(number1, number2);
    let largestNumber = Math.max(number1, number2);
    let totalNumberofTerms = Math.abs(number2 - number1) + 1;
    let sumOfArithmeticSequence = (totalNumberofTerms/2)*(2*smallestNumber + (totalNumberofTerms - 1));
    return sumOfArithmeticSequence;
    
};

// Do not edit below this line
module.exports = sumAll;
