const faker = require('faker');
const fs = require('fs');
const moment = require('moment');
const {writeData} = require('../writeToCSV.js');


/* 
* @function generateGeneralDiscountsGenerates
*
* @typedef {object} Data
* @property {number} discount - % off of product price
* @property {number} productId
* @property {date} - start date of promotion
* @property {date} - end date of promotion
*
* @returns {Data} one fake data record
*/

/** Generates 1 general discount record **/
const generateGeneralDiscounts = () => {

  //create 14 day range promotional discount
  let days = faker.random.number({min: 1, max: 183}); //gives a random number of days within a 6 month period
  let start = moment().add(days, 'days');
  let end = moment(start).add(14, 'days');

  //format date to month, day, year
  start = moment(start).format('YYYYMMDD');
  end = moment(end).format('YYYYMMDD');

  //one row of data
  let record = {
    discount: faker.random.number({min: 5, max: 95}),
    product_id: faker.random.number({min: 1, max: 1e7}), //1-10M productId's
    start: start,
    end: end
  };

  return record;
};

module.exports.generateGeneralDiscounts = generateGeneralDiscounts;

//write general discounts data to csv ran from command line
process.argv[2] === '--generate' ? writeData(1e7, generateGeneralDiscounts, 'gen_discounts') : null;





