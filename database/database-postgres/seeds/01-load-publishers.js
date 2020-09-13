
const path = require('path');
const inputFile = path.join(process.cwd(), '/database/csv/publishers.csv');
const table = 'publishers';
const headers = 'name';

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex(`${table}`).del();

  //set sequence value to 1
  await knex.raw(`ALTER SEQUENCE ${table}_id_seq RESTART WITH 1;`);
  
  // Inserts seed entries
  await knex.raw(`COPY ${table} (${headers}) FROM '${inputFile}' DELIMITER ',' CSV HEADER;`);

};
