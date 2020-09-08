/*  knex configuration */

//use .env
require("dotenv").config();
const { CLIENT, PGDATABASE, PGHOST, PGPORT, PGUSER, PGPASSWORD} = process.env;

module.exports = {
  /*  config for development  */
  development: {
    client: CLIENT, //specify client, psql for this service
    //need to create user login/password and database in .env file, host is local ip, port is pg default
    connection: {
      database: PGDATABASE, 
      user: PGUSER,
      password: PGPASSWORD,
      host: PGHOST,
      port: PGPORT
    },
    migrations: {
      directory: __dirname + "/database-postgres/migrations"
    },
    seeds: {
      directory: __dirname + "/database-postgres/seeds"
    }
  }
};
