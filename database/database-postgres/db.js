/* stores the configuration */


const knexconfig = require('../../knexfile.js');

const env = process.env.NODE.ENV || 'development';
const configOptions = knexconfig[env];
const knex = require('knex');
const db = knex(configOptions);

module.exports = db;



