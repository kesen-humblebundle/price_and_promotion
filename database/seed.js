const faker = require('faker');
const fs = require('fs');
const db = require('./index.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let seed = function () {

  let gamesPriceAndPromos = [];
  //only generating 100 records because this is test data
  for (var i = 1; i <= 100; i++) {
    //db schema fields
    let price = faker.commerce.price(10, 100, 2);
    let discount = faker.finance.amount(1, 9, 0);
    let start = faker.date.recent(5);
    let expiry = addDays(start, 25); //all discounts expire after 25 days

    //push object of values into array
    gamesPriceAndPromos.push({
      product_id: i,
      price,
      discount,
      start,
      expiry,
    });
  }
  //json, stringify obj
  let jsonArray = JSON.stringify(gamesPriceAndPromos);
  //write array of games to file for gist requirement
  fs.writeFileSync('./database/priceAndPromoSampleData.js', jsonArray);
  //return array of games
  return gamesPriceAndPromos;
}

//expiry date helper function, which supports changing length of promotions
function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
};

//insert into DB
let seedToDB = function () {
  //call seed fn
  let data = seed();

  //insert records into db
  return db.collection.insertMany(data)
    //response fr db
    .then(result => {
      console.log('Successfully inserted items: ', result);
      return result;
    })
    .catch(err => console.error(`Failed to insert documents: ${err}`));
};

seedToDB();