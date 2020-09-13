
/*  migration file to load 5 table schemas (publishers, products, subscription_discounts, general_discounts, and publisher_discounts) */

exports.up = async function(knex) {

  return knex.schema
    .createTable("publishers", tbl => {
      tbl.increments('id')
      tbl.string('name')
    })
    .createTable("products", tbl => {
      tbl.increments('id')
      tbl.string('name')
      tbl.float('base_price')
      tbl
        .integer('publisher_id')
        .references('id')
        .inTable('publishers')
    })
    .createTable("subscription_discounts", tbl => {
      tbl.increments('id')
      tbl.integer('discount')
      tbl
        .integer('product_id')
        .references('id')
        .inTable('products')
    })
    .createTable("publisher_discounts", tbl => {
      tbl.increments('id')
      tbl.integer('discount')
      tbl
        .integer('publisher_id')
        .references('id')
        .inTable('publishers')
      tbl.date('start')
      tbl.date('end')
    })
    .createTable("general_discounts", tbl => {
      tbl.increments('id')
      tbl.integer('discount')
      tbl
      .integer('product_id')
      .references('id')
      .inTable('products')
      tbl.date('start')
      tbl.date('end')
    });
 
};

exports.down = function(knex) {

  return knex.schema
  .dropTableIfExists("subscription_discounts")
  .dropTableIfExists("publisher_discounts")
  .dropTableIfExists("general_discounts")
  .dropTableIfExists("products")
  .dropTableIfExists("publishers");

};
