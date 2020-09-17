const path = require('path');
const inputFile = path.join(process.cwd(), '/database/csv/products.csv');
const table = 'products';
const headers = '"name",base_price,publisher_id';

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex(`${table}`).del();

  //set sequence value to 1
  await knex.raw(`ALTER SEQUENCE ${table}_id_seq RESTART WITH 1;`);
  
  // Inserts seed entries
  await knex.raw(`COPY ${table} (${headers}) FROM '${inputFile}' DELIMITER ',' CSV HEADER;`);

};
