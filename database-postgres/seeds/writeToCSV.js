const fs = require('fs');


//npm package to convert to csv and takes fs.createWriteStream as an argument for one of its methods
const csvWriter = require('csv-write-stream');
const writer = csvWriter({sendHeaders: false});

/* 
 * Func creates writes data to csv
 *  @params {number} [records=1e7] # of records
 *  @params {function} data generator
 *  @params {string} name of the csv file
*/

module.exports = (records = 1e7, dataGeneratorFunc, fileName) => {

  writer.pipe(fs.createWriteStream(`./database-postgres/csv/${fileName}.csv`));

  (async () => {
    try {
      for (let i = 0; i < records; i++) {

        let data = dataGeneratorFunc();

        //when writestream returns false because highWaterMark is reached, stream will need to be drained
        if (!writer.write(data)) {
          await new Promise( resolve => writer.once('drain', resolve));
        }
      }
      //waits until it's done writing
      await new Promise( resolve => writer.on('finish', resolve));

  } catch(err) {
    throw err;
  }
  })();

};


