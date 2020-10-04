
/*  migration file to load 5 table schemas (publishers, products, subscription_discounts, general_discounts, and publisher_discounts) */

exports.up = async function(knex) {

  return knex.schema
    .createTable("publishers", tbl => {
      tbl.increments('id')
      tbl.string('name').notNullable();
    })
    .createTable("products", tbl => {
      tbl.increments('id')
      tbl.string('name').notNullable();
      tbl.float('base_price').notNullable();
      tbl
        .integer('publisher_id')
        .references('id')
        .inTable('publishers')
        .notNullable();
    })
    .createTable("subscription_discounts", tbl => {
      tbl.increments('id').notNullable();
      tbl.integer('discount').notNullable();
      tbl
        .integer('product_id')
        .references('id')
        .inTable('products')
        .notNullable();
    })
    .createTable("publisher_discounts", tbl => {
      tbl.increments('id')
      tbl.integer('discount').notNullable();
      tbl
        .integer('publisher_id')
        .references('id')
        .inTable('publishers')
        .notNullable();
      tbl.date('start_date').notNullable();
      tbl.date('end_date').notNullable();
    })
    .createTable("general_discounts", tbl => {
      tbl.increments('id')
      tbl.integer('discount').notNullable();
      tbl
      .integer('product_id')
      .references('id')
      .inTable('products')
      .notNullable();
      tbl.date('start_date').notNullable();
      tbl.date('end_date').notNullable();
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
