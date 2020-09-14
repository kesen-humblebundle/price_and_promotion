const db = require('../db.js');

/**
 * @param {String} product id
 * 
 * @returns {Number} number of records deleted
**/

module.exports = async (id) => {

  return await db('products')
    .where('id', id)
    .del();

}