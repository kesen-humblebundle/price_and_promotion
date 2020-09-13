const db = require('../db.js');

/**
 * @param {Array} product ids
 * 
 * @returns {Array.<Object>} product record with base price, discount, one general/publisher discount if any
 */

module.exports = async (id) => {

  return db('products')
    .where('id', id)
    .del();

}