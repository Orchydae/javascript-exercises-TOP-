const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5/9);
  roundedCelsius = celsius.toFixed(1);
  return parseFloat(roundedCelsius);
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius * (9/5)) + 32;
  roundedFahrenheit = fahrenheit.toFixed(1);
  return parseFloat(roundedFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
