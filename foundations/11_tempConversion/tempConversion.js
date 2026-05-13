const convertToCelsius = function (temperature) {
  result = ((temperature - temperature) * 5) / 9;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function (temperature) {
  return (temperature * 9) / 5 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
