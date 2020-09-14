const db = require('../db.js');

/**
 * @param {Array.<Object>} record(s) to be added 
 * 
 * @returns {Array} id(s) of records that were added
 */

module.exports = async (obj) => {

  let { table, insert } = obj;
 
  return await db
    .insert(insert, ['id'])
    .into(`${table}`)

}

