const { nano } = require('./index.js');
const csv = require('csv-parser');
const fs = require('fs');
require("dotenv").config();
const { COUCHDB_URI } = process.env;
const couchimport = require('couchimport');


//TODO: refactor code to check db if exist before creates one

(async () => {
  
  //creates database
  await nano.db.create('priceandpromotions')

  const filepathProducts = "/Users/krissy/Documents/Codes/rpt21-SDC/price_and_promotion/database/csv/productsCouch.csv";
  const filepathGenDiscounts = "/Users/krissy/Documents/Codes/rpt21-SDC/price_and_promotion/database/csv/gen_discounts_couch.csv";
  const filepathPubDiscounts = "/Users/krissy/Documents/Codes/rpt21-SDC/price_and_promotion/database/csv/pub_discounts_couch.csv";

  const options = {
    delimiter: ",",
    url: COUCHDB_URI,
    database: 'priceandpromotions',
    buffer: 10000
  };

  await couchimport.importFile(filepathProducts, options, (err,data) => {
    console.log("done",err,data);
  });

  await couchimport.importFile(filepathGenDiscounts, options, (err,data) => {
    console.log("done",err,data);
  });

  await couchimport.importFile(filepathPubDiscounts, options, (err,data) => {
    console.log("done",err,data);
  });


 })();

