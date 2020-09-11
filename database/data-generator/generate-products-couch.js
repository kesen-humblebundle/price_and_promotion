const faker = require('faker');
const {generateDiscounts} = require('./generate-discounts-couch.js');


/* 
* @function generateGeneralDiscountsGenerates
* @params {number} product id
*
* @typedef {object} Data
* @property {number} _id - product id
* @property {string} name - product name
* @property {number} base_price - product price
* @property {object} discounts
*
* @returns {Data} one fake data object
*/


/* Generates 1 product record */
const generateProductsForCouch = (id) => {

  async function printCsv(data) {
    console.log(
      await new ObjectsToCsv(data).toString()
    );
  }

  let generalDiscounts = [];
  let publisherDiscounts = [];

  for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    generalDiscounts.push(generateDiscounts());
  }

  for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    publisherDiscounts.push(generateDiscounts());
  }

  let record = {
    _id: id,
    name: faker.lorem.words(),
    base_price: parseFloat(faker.random.number({min:5, max: 100, precision: .01}).toFixed(2)),
    discounts: {
      general: generalDiscounts,
      publisher: publisherDiscounts,
      subscription: {
        discount: faker.random.number({min: 10, max: 20})
      }
    }
  }

  return record;

};

module.exports.generateProductsForCouch = generateProductsForCouch;