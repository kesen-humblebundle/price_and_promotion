const faker = require('faker');
const fs = require('fs');

//npm package to convert to csv and takes fs.createWriteStream as an argument for one of its methods
const csvWriter = require('csv-write-stream');
const writer = csvWriter({sendHeaders: false});

//creates a csv file of 5M game publishers
const generatePublishers = () => {
 
  writer.pipe(fs.createWriteStream('./database-postgres/csv/publishers.csv'));

  (async () => {
    try {
      for (let i = 0; i < 5e6; i++) {

        //one row of data
        let publisher = {publisher: faker.lorem.words()};

        //when writestream returns false because highWaterMark is reached, stream will need to be drained
        if (!writer.write(publisher)) {
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

generatePublishers();