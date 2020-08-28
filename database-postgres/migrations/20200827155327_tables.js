exports.up = async function(knex) {

  return knex.schema
    .createTable("publishers", tbl => {
      tbl.increments('id')
      tbl.string('name')
    })
    .createTable("products", tbl => {
      tbl.increments('id')
      tbl.string('game_name')
      tbl.float('base_price')
      tbl
        .integer('publisherId')
        .references('id')
        .inTable('publishers')
    })
    .createTable("subscription_discounts", tbl => {
      tbl.increments('id')
      tbl.integer('discount')
      tbl
        .integer('proudctId')
        .references('id')
        .inTable('products')
    })
    .createTable("publisher_discounts", tbl => {
      tbl.increments('id')
      tbl.integer('discount')
      tbl.date('start')
      tbl.date('end')
      tbl
        .integer('publisherId')
        .references('id')
        .inTable('publishers')
    })
    .createTable("general_discounts", tbl => {
      tbl.increments('id')
      tbl.integer('discount')
      tbl.date('start')
      tbl.date('end')
      tbl
      .integer('productId')
      .references('id')
      .inTable('products')
    });
 
};

exports.down = function(knex) {

  return knex.schema
    .dropTableIfExists("publishers")
    .dropTableIfExists("products")
    .dropTableIfExists("subscription_discounts")
    .dropTableIfExists("publisher_discounts")
    .dropTableIfExists("general_discounts");

};
