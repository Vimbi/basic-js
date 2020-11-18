const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    if(arr.indexOf('--discard-next') !== -1) {
      return arr.map()

    }
  } else {
    return false;
  }
};
