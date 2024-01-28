const palindromes = function (string) {
    let alphaNumeric = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverse = alphaNumeric.split('').reverse().join('');
    return alphaNumeric === reverse;
};

// Do not edit below this line
module.exports = palindromes;
