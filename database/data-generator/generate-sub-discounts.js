const faker = require('faker');
const {writeData} = require('../writeToCSV.js');

/* 
* @function generateSubscriptionDiscounts
*
* @params {number} product id
*
* @typedef {object} Data
* @property {number} discount - % off of product price
* @property {number} productId
*
* @returns {Data} one fake data record
*/

/** Generates 1 subscription discount record **/
const generateSubscriptionDiscounts = (id) => {
 
  //one row of data
  let record = {
    discount: faker.random.number({min: 10, max: 20}),
    product_id: id, //1-10M productId's
  };

  return record;
};

module.exports.generateSubscriptionDiscounts = generateSubscriptionDiscounts;

//write products data to csv if ran from command line
process.argv[2] === '--generate' ? writeData(1e7, generateSubscriptionDiscounts, 'sub_discounts') : null;
