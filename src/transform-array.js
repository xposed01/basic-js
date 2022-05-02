const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!"); 
  }

  console.log(arr)

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--double-prev') {
      if(arr[i-1] != undefined) {
        newArr.push(newArr[newArr.length-1]);
      }
      i++;
    }

    if (arr[i] === '--discard-prev') {
      if(arr[i-1] != undefined) {
        newArr.pop();
      }
      i++;
    }

    if(arr[i] === '--discard-next'){
      if (arr.length < 1) {
        return arr;
      }
      if(arr[i+1] != undefined) {
        i += 2;
      }

      if(i+1 === arr.length) {
        return newArr;
      }
    }

    if(arr[i] === '--double-next'){
      if(arr[i+1] != undefined) {
        newArr.push(arr[i+1]);
        i++;
      }
      if(i+1 === arr.length) {
        return newArr;
      }
    }

    newArr.push(arr[i]);

  }

return newArr;
}

module.exports = {
  transform
};
