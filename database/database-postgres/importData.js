// Import required modules
const fs = require('fs')
const path = require('path')
const { Pool } = require('pg')
const copyFrom = require('pg-copy-streams').from

const { PGDATABASE, PGHOST, PGPORT, PGUSER, PGPASSWORD} = process.env;


// inputfile & target table
const inputFile = path.join(__dirname, '/database-postgres/csv/publishers.csv')
const table = 'publishers';
const headers = 'publisher';

const pool = new Pool(
  {
    user: PGUSER,
    host: PGHOST,
    database: 'priceandpromotions',
    password: PGPASSWORD,
    port: PGPORT,
  })
// var pool = new Pool();
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

 
pool.connect(function (err, client, done) {
  var stream = client.query(copyFrom(`COPY ${table} FROM STDIN CSV`))
  var fileStream = fs.createReadStream(`${inputFile}`)
  fileStream.on('error', done)
  stream.on('error', done)
  // stream.on('finish', done)
  fileStream.pipe(stream)
})

