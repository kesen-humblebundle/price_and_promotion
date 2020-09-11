const faker = require('faker');
const moment = require('moment');

/* 
* @function generatePublisherDiscounts
*
* @typedef {object} Data
* @property {number} discount - % off of product price
* @property {date} - start - date of promotion
* @property {date} - end - date of promotion
*
* @returns {Data} one fake data record
*/

/** Generates 1 publisher discount record **/
const generatePublisherDiscounts = () => {

  //create 14 day range promotional discount
  let days = faker.random.number({min: 1, max: 90}); //gives a random number of days within a 3 month period
  let start = moment().add(days, 'days');
  let end = moment(start).add(14, 'days');

  start = moment(start).format('YYYY-MM-DD');
  end = moment(end).format('YYYY-MM-DD');

  //a row of data
  let record = {
    discount:  faker.random.number({min: 5, max: 95}),
    start: start,
    end: end
  };
   return record;
};

module.exports.generatePublisherDiscounts = generatePublisherDiscounts;


