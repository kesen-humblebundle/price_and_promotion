  
const faker = require('faker');
const {writeData} = require('../writeToCSV.js');

/* 
* @function generatePublishers
*
* @typedef {object} Data
* @property {string} publisher - name of publisher
*
* @returns {Data} one fake data record
*/


/* Generates 1 publisher record */
const generatePublishers = () => {
 
  //one row of data
  let record = {name: faker.lorem.words()};
  return record;
};

module.exports.generatePublishers = generatePublishers;

//write products data to csv if ran from command line
process.argv[2] === '--generate' ? writeData(5e6, generatePublishers, 'publishers') : null;