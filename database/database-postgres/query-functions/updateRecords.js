const db = require('../db.js');

/**
 * @param {Object} contains product id, table name, columns and values to be updated
 * 
 * @returns {Array} record id that was updated
 */

module.exports = async (obj) => {

  let { id, table, update } = obj;
 
  if (table === 'products' || table === 'publishers') {
    return await db(`${table}`)
      .returning('id')
      .where('id', id)
      .update(update);
  } else if (table === 'subscription_discounts') {
    return await db(`${table}`)
    .returning('id')
    .where('product_id', id)
    .update(update);
  }

}