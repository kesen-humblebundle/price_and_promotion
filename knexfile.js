/*  knex configuration */

//use .env
require("dotenv").config();
const { CLIENT, DATABASE, HOST, PG_PORT, PG_USER, PG_PASSWORD} = process.env;

module.exports = {
  /*  config for development  */
  development: {
    client: CLIENT, //specify client, psql for this service
    connection: {
      database: DATABASE,
      user: PG_USER,
      password: PG_PASSWORD,
      host: HOST,
      port: PG_PORT
    },
    migrations: {
      directory: __dirname + "/database-postgres/migrations"
    },
    seeds: {
      directory: __dirname + "/database-postgres/seeds"
    }
  }
};
