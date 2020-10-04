/*  knex configuration */

//use .env
require("dotenv").config();
const { CLIENT, POSTGRES_DB, PGHOST, PGPORT, POSTGRES_USER, POSTGRES_PASSWORD} = process.env;

module.exports = {
  /*  config for development  */
  development: {
    client: CLIENT, //specify client, psql for this service
    //need to create user login/password and database in .env file, host is local ip, port is pg default
    connection: {
      database: POSTGRES_DB, 
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      host: PGHOST, //ec2 ip address
      port: PGPORT //lower the firewall
    },
    migrations: {
      directory: __dirname + "/database/database-postgres/migrations"
    },
    seeds: {
      directory: __dirname + "/database/database-postgres/seeds"
    }
  }
};
