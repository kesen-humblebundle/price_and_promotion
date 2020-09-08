const inputFile = '/Users/krissy/Documents/Codes/rpt21-SDC/price_and_promotion/database-postgres/csv/pub_discounts.csv';
const table = 'publisher_discounts';
const headers = 'discount,publisher_id,start,"end"';

exports.seed = async (knex) => {

  // Deletes ALL existing entries
  await knex(`${table}`).del()
  
  // Inserts seed entries
  await knex.raw(`COPY ${table} (${headers}) FROM '${inputFile}' WITH (FORMAT CSV, DELIMITER ',');`);

};
