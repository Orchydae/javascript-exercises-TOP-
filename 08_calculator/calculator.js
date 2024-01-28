const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(arrayNumbers) {
	let sum = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
  }
  return sum;
};

const multiply = function(arrayNumbers) {
  let sum = 1;
  for (let i = 0; i < arrayNumbers.length; i++) {
    sum *= arrayNumbers[i];
  } 
  return sum;
};

const power = function(number1, number2) {
	let sum = 1;
  for (let i = 0; i < number2; i++) {
    sum *= number1;
  }
  return sum;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  } else if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
