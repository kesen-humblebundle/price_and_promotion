/* stores the configuration */

const knex = require('knex');

const knexconfig = require('./knex-configuration.js');

const env = process.env.NODE.ENV || 'development';
const configOptions = knexconfig[env];

module.exports = knex(configOptions);
