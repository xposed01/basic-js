const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
	
	if (!Array.isArray(members)) return false;
	
	let trimmedArr = [];
	let result = '';
	
	//trim + uppercase
	for (let el of members) {
		if (typeof(el) == 'string') {	
		let trimmed = el.trim();
		let upperCased = trimmed.toUpperCase()
		trimmedArr.push(upperCased);
		}
	}
  // sort
	let sortedArr = trimmedArr.sort();
	for (let el of sortedArr) {
		result += el[0];
	}
	
	return result;
}

module.exports = {
  createDreamTeam
};
