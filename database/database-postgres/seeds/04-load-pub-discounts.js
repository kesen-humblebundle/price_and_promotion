const path = require('path');
const inputFile = path.join(process.cwd(), '/database/csv/pub_discounts.csv');
const table = 'publisher_discounts';
const headers = 'discount,publisher_id,start_date,end_date';

exports.seed = async (knex) => {

  // Deletes ALL existing entries
  await knex(`${table}`).del()
  
  // Inserts seed entries
  await knex.raw(`COPY ${table} (${headers}) FROM '${inputFile}' DELIMITER ',' CSV HEADER;`);

};
