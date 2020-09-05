// const { knex } = require('./db-test.js');

// module.exports = knex.schema
//     .createTable("publishers", tbl => {
//       tbl.increments('id')
//       tbl.string('name')
//     })
//     .createTable("products", tbl => {
//       tbl.increments('id')
//       tbl.string('game_name')
//       tbl.float('base_price')
//       tbl
//         .integer('publisher_id')
//         .references('id')
//         .inTable('publishers')
//     })
//     .createTable("subscription_discounts", tbl => {
//       tbl.increments('id')
//       tbl.integer('discount')
//       tbl
//         .integer('product_id')
//         .references('id')
//         .inTable('products')
//     })
//     .createTable("publisher_discounts", tbl => {
//       tbl.increments('id')
//       tbl.integer('discount')
//       tbl
//         .integer('publisher_id')
//         .references('id')
//         .inTable('publishers')
//       tbl.date('start')
//       tbl.date('end')
//     })
//     .createTable("general_discounts", tbl => {
//       tbl.increments('id')
//       tbl.integer('discount')
//       tbl
//       .integer('product_id')
//       .references('id')
//       .inTable('products')
//       tbl.date('start')
//       tbl.date('end')
//     });
