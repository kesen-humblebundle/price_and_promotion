const faker = require('faker');
const moment = require('moment');
const {writeData} = require('../writeToCSV.js');

/* 
* @function generatePublisherDiscounts
*
* @typedef {object} Data
* @property {number} discount - % off of product price
* @property {number} publisherId
* @property {date} - start - date of promotion
* @property {date} - end - date of promotion
*
* @returns {Data} one fake data record
*/

/** Generates 1 publisher discount record **/
const generatePublisherDiscounts = () => {

  //create 14 day range promotional discount
  let days = faker.random.number({min: 1, max: 183}); //gives a random number of days within a 6 month period
  let start = moment().add(days, 'days');
  let end = moment(start).add(14, 'days');

  //format date to month, day, year
  start = moment(start).format('YYYYMMDD');
  end = moment(end).format('YYYYMMDD');

  //a row of data
  let record = {
    discount:  faker.random.number({min: 5, max: 95}),
    publisher_id:  faker.random.number({min: 1, max: 5e6}), //1-5M publisherId's,
    start: start,
    end: end
  };
   return record;
};

module.exports.generatePublisherDiscounts = generatePublisherDiscounts;

//write products data to csv if ran from command line
process.argv[2] === '--generate' ? writeData(5e6, generatePublisherDiscounts, 'pub_discounts') : null;

