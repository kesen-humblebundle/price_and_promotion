const fs = require('fs')
const {Client} = require('pg')
const copyFrom = require('pg-copy-streams').from
 
let client = new Client()
 
// pool.connect(function (err, client, done) {
const importData = (err, done) => {

  var stream = client.query(copyFrom('COPY publishers FROM STDIN'))
  var fileStream = fs.createReadStream('publishers.csv')
  fileStream.on('error', done)
  stream.on('error', done)
  stream.on('finish', done)
  fileStream.pipe(stream)
}
// });

module.exports.importData = importData;