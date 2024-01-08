const sumAll = function(number1, number2) {
    
    let smallestNumber = Math.min(number1, number2);
    let largestNumber = Math.max(number1, number2);
    let totalNumberofTerms = Math.abs(number2 - number1) + 1;
    let sumOfArithmeticSequence = (totalNumberofTerms/2)*(2*smallestNumber + (totalNumberofTerms - 1));
    return sumOfArithmeticSequence;
    
};

// Do not edit below this line
module.exports = sumAll;
