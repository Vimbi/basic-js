const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  if (arr.some(el => el === 'DEF')) {
    console.log(arr);
  }

  if (Array.isArray(arr)) {

    let newArr = arr.slice();

    if(newArr.every(elem => elem !== '--discard-next' && elem !== '--discard-prev' && elem !== '--double-next' && elem !== '--double-prev')) {
      return newArr;
    } else {
      newArr.forEach((value, index) => {
        if(value === '--discard-next') {
          newArr[index + 1] !== undefined ? newArr.splice(index, 2) : newArr.splice(index, 1);
        } else if (value === '--discard-prev') {
          index - 1 >= 0 ? newArr.splice(index - 1, 2) : newArr.splice(index, 1);
        } else if (value === '--double-next') {
          newArr[index + 1] !== undefined ? newArr[index] = newArr[index + 1] : newArr.splice(index, 1);
        } else if (value === '--double-prev') {
          index - 1 >=0 ? newArr[index] = newArr[index - 1] : newArr.splice(index, 1);
        }
      });
  
      return transform(newArr);
    } 
    
  } else {    
    throw Error;
  }
};
