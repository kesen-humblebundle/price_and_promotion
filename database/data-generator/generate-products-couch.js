const faker = require('faker');
const fs = require('fs');
const {writeData} = require('../writeToCSV.js');

/* 
* @function generateGeneralDiscountsGenerates
* @params {number} product id
*
* @typedef {object} Data
* @property {number} _id - product id
* @property {string} name - product name
* @property {number} base_price - product price
* @property {number} publisher_id - Publisher
* @property {number} subscription_discount - % off of base price
*
* @returns {Data} one fake data record
*/


/* Generates 1 product record */
const generateProductsForCouch = (id) => {

  let record = {
    _id: id,
    name: faker.lorem.words(),
    base_price: parseFloat(faker.random.number({min:5, max: 100, precision: .01}).toFixed(2)),
    publisher: faker.random.number({min: 1, max: 5e6}), //1-5M publisherId's
    subscription_discount: faker.random.number({min: 10, max: 20}),
    type: "product"
  };

  return record;

};

module.exports.generateProductsForCouch = generateProductsForCouch;

//write products data to csv if ran from command line
process.argv[2] === '--generate' ? writeData(1e7, generateProductsForCouch, 'productsCouch') : null;


