const db = require('../db.js');

/**
 * @param {String} product id
**/

module.exports = async (id) => {

  return await db('products')
    .where('id', id)
    .del();

}