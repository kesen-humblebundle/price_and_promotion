const copyFrom = require('pg-copy-streams').from
const fs = require('fs');

const inputFile = '/Users/krissy/Documents/Codes/rpt21-SDC/price_and_promotion/database-postgres/csv/products.csv';
const table = 'products';
const headers = 'game_name,base_price,publisher_id';

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex(`${table}`).del();

  //set sequence value to 1
  await knex.raw(`ALTER SEQUENCE ${table}_id_seq RESTART WITH 1;`);
  
  // Inserts seed entries
  await knex.raw(`COPY ${table} (${headers}) FROM '${inputFile}' WITH (FORMAT CSV, DELIMITER ',');`);

};
