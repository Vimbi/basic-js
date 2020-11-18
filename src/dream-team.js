const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let result = '';  
  if(Array.isArray(array)) {
    let newArr = array.filter(el => typeof el === 'string' && el !== '').map(y => y.replace(/\s+/g, '')).map(z => z.toUpperCase());    
    newArr.sort();    
    newArr.forEach(x => {
      result += x[0];
    })
    return result;
  } else {
    return false;
  }
  
  
};
