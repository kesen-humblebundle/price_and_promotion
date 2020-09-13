const db = require('../db.js');
let moment = require('moment');

module.exports = async (id) => {

  let today = new Date();
  let date = moment(today).format('YYYY-MM-DD');
 
  return db
    .select(db.raw('subd.base_price, subd.discount, MAX(pgd.discount)'))
    .from(
      db({p: 'products'}) // join products table to subscription table by id
      .select('p.base_price', 'subd.discount', 'p.id')
      .innerJoin({subd: 'subscription_discounts'}, 'subd.product_id', '=', 'p.id')
      .where('p.id', id).as('subd')
    ).as('subd')
    .leftJoin(  
      db //joins products to publisher discounts by date and product id
      .select('p.base_price', 'pubd.discount', 'p.id')
      .from(
        db({p: 'products'})
        .select('p.publisher_id', 'p.base_price', 'p.id')
        .where('p.id', id).as('p')
      )
      .leftJoin(
        db({pubd: 'publisher_discounts'})
        .whereRaw('(? >= pubd.start) AND (? <= pubd.end)', [date, date])
        .as('pubd'), 'pubd.publisher_id', 'p.publisher_id'
      )
      .unionAll([ 
        db //joins products to general discounts by date and product id
        .select('p.base_price', 'gend.discount', 'p.id')
        .from(
          db({p: 'products'})
          .select( 'p.id', 'p.base_price')
          .where('p.id', id).as('p')
        )
        .leftJoin(
          db({gend: 'general_discounts'})
          .select('gend.product_id', 'gend.discount')
          .whereRaw('(? >= gend.start) AND (? <= gend.end)', [date, date])
          .as('gend'), 'gend.product_id', 'p.id'
        )
      ]).as('pgd')
    , 'pgd.id', 'subd.id')
    .groupBy('subd.base_price', 'subd.discount');

}