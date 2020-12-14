const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  

  // if (Array.isArray(arr)) {

  //   let newArr = arr.slice();

  //   if(newArr.every(elem => elem !== '--discard-next' && elem !== '--discard-prev' && elem !== '--double-next' && elem !== '--double-prev')) {
  //     return newArr;
  //   } else {
  //     newArr.forEach((value, index) => {
  //       if (value === '--discard-next' && (newArr[index + 2] === '--discard-prev' || newArr[index + 2] === '--double-prev')) {
  //         newArr.splice(index, 3);
  //       } else if (value === '--discard-next') {
  //         newArr[index + 1] !== undefined ? newArr.splice(index, 2) : newArr.splice(index, 1);
  //       } else if (value === '--discard-prev') {
  //         index - 1 >= 0 ? newArr.splice(index - 1, 2) : newArr.splice(index, 1);
  //       } else if (value === '--double-next') {
  //         newArr[index + 1] !== undefined ? newArr[index] = newArr[index + 1] : newArr.splice(index, 1);
  //       } else if (value === '--double-prev') {
  //         index - 1 >=0 ? newArr[index] = newArr[index - 1] : newArr.splice(index, 1);
  //       }
  //     });
  
  //     return transform(newArr);
  //   } 
    
  // } else {    
  //   throw Error;
  // }

  if (Array.isArray(arr)) {

    let newArr = arr.slice();

    if(newArr.every(elem => elem !== '--discard-next' && elem !== '--discard-prev' && elem !== '--double-next' && elem !== '--double-prev')) {
      return newArr;
    } else {
      for (let index = 0; index <= newArr.length - 1; index++) {
        if (newArr[index + 2] === '--discard-prev' && newArr[index] === '--discard-next') {
          newArr.splice(index, 3);
          index -= 1;
        } else if (newArr[index + 2] === '--double-prev' && newArr[index] === '--discard-next') {
          newArr.splice(index, 3);
          index -= 1;
        } else if (newArr[index] === '--discard-next') {
          newArr[index + 1] !== undefined ? newArr.splice(index, 2) : newArr.splice(index, 1);
          index -= 1;
        } else if (newArr[index] === '--discard-prev') {
          index - 1 >= 0 ? newArr.splice(index - 1, 2) : newArr.splice(index, 1);
          index -= 1;
        } else if (newArr[index] === '--double-next') {
          newArr[index + 1] !== undefined ? newArr[index] = newArr[index + 1] : newArr.splice(index, 1);
          index -= 1;
        } else if (newArr[index] === '--double-prev') {
          index - 1 >=0 ? newArr[index] = newArr[index - 1] : newArr.splice(index, 1);
          index -= 1;
        }
      }  
      return transform(newArr);
    } 
    
  } else {    
    throw Error;
  }
};
