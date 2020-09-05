require("dotenv").config();
const { COUCHDB_URI } = process.env;

//connect to couchdb
module.exports.nano = require('nano')(COUCHDB_URI);



