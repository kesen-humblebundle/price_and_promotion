const faker = require('faker');
const fs = require('fs');
const {writeData} = require('../writeToCSV.js');

/* 
* @function generateGeneralDiscountsGenerates
*
* @typedef {object} Data
* @property {string} name - product name
* @property {number} base_price - product price
* @property {number} publisherId - Publisher
*
* @returns {Data} one fake data record
*/


/* Generates 1 product record */
const generateProducts = () => {

  let record = {
    name: faker.lorem.words(),
    base_price: parseFloat(faker.random.number({min:5, max: 100, precision: .01}).toFixed(2)),
    publisherId: faker.random.number({min: 1, max: 5e6}) //1-5M publisherId's
  };

  return record;

};

module.exports.generateProducts = generateProducts;

//write products data to csv if ran from command line
process.argv[2] === '--generate' ? writeData(100, generateProducts, 'productstest') : null;


