const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(Object.prototype.toString.call(date) === '[object Date]') {
    let x = date.getMonth;
  } else throw Error;

  switch (x) {
    case 0:
    case 1:
    case 12:
      return 'winter';
      break;

    case 2:
    case 3:
    case 4:
      return 'spring';
      break;

    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    
    case 8:
    case 9:
    case 10:
      return 'fall';
      break;
  } 
};
