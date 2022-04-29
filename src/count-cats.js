const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
	let result = 0;
	for (let el of arr) {
		el.forEach((entry) => {
			if (entry == '^^') {
				result++;
			}
		});
	}
	return result;
}

module.exports = {
  countCats
};
