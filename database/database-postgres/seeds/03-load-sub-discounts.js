const path = require('path');
const inputFile = path.join(process.cwd(), '/database/csv/sub_discounts.csv');
const table = 'subscription_discounts';
const headers = 'discount,product_id';

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex(`${table}`).del()
  
  // Inserts seed entries
  await knex.raw(`COPY ${table} (${headers}) FROM '${inputFile}' DELIMITER ',' CSV HEADER;`)
 
};
