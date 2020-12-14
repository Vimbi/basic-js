const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(x) {
  if (typeof x === 'string') {
    return Number(x) > 0 && Number(x) <= 15 ? Math.ceil(Math.log(MODERN_ACTIVITY / x) / (0.693 / HALF_LIFE_PERIOD)) : false;
  }
  return false;
};

