const CustomError = require("../extensions/custom-error");

module.exports = function countCats(x) {
  let result = 0;
   x.forEach(element => {
    element.forEach(y => {
      if (y === '^^') {
        result++;
      }
    });
  });

  return result;
};
