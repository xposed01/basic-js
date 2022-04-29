const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {

	// date validator
	if (date == undefined || arguments.length == 0) {
    return 'Unable to determine the time of year!'; 
  } 
  
	if (Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error('Invalid date!');
	} 

  try {
    let tryDate1 = date.getDay();
    let tryDate2 = date.getMonth();
    let tryDate3 = date.getYear();
  } catch(err) {
    throw new Error('Invalid date!');
  }
	
  // getDate
	let dateMonth = date.getMonth();
	let autumn = [8, 9, 10];
	let winter = [11, 0, 1];
	let spring = [2, 3, 4];
	let summer = [5, 6, 7];

	if (autumn.includes(dateMonth)) return 'autumn'
	if (winter.includes(dateMonth)) return 'winter'
	if (spring.includes(dateMonth)) return 'spring'
	if (summer.includes(dateMonth)) return 'summer'

}

module.exports = {
  getSeason
};
