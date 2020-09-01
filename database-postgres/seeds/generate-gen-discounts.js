const faker = require('faker');
const fs = require('fs');
const moment = require('moment');
const writeData = require('./writeToCSV.js');

//TODO for Optimization
//faker.fake for optimizaton
//batches for ec2
//test csv by reading, test data types


/* 
*  Func creates 1 fake product record 
*    @returns {{discount: Number, productId: Number, start: Date, end: Date}} one data record
*/

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
    productId: faker.random.number({min: 1, max: 1e7}), //1-10M productId's
    start: start,
    end: end
  };

  return record;
};

module.exports = generateGeneralDiscounts;

writeData(1e7, generateGeneralDiscounts, 'gen_discounts');




