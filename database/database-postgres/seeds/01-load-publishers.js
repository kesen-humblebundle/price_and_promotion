const copyFrom = require('pg-copy-streams').from
const fs = require('fs');
const path = require('path');

const inputFile = '/Users/krissy/Documents/Codes/rpt21-SDC/price_and_promotion/database-postgres/csv/publishers.csv';
const table = 'publishers';
const headers = 'name';

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex(`${table}`).del();

  //set sequence value to 1
  await knex.raw(`ALTER SEQUENCE ${table}_id_seq RESTART WITH 1;`);
  
  // Inserts seed entries
  await knex.raw(`COPY ${table} FROM '${inputFile}' DELIMITER ',' CSV HEADER;`);

};
