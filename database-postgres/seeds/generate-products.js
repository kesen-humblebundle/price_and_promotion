const faker = require('faker');
const fs = require('fs');

//npm package to convert to csv and takes fs.createWriteStream as an argument for one of its methods
const csvWriter = require('csv-write-stream');
const writer = csvWriter({sendHeaders: false});

//creates csv file of 10M products with base price
const generateProducts = () => {

  writer.pipe(fs.createWriteStream('./database-postgres/csv/products.csv'));

  (async () => {
    try {
      for (let i = 0; i < 1e7; i++) {

        let record = {
          name: faker.lorem.words(),
          base_price: faker.random.number({min: 5, max: 100, precision: 0.01}),
          publisherId: faker.random.number({min: 1, max: 5e6}) //1-5M publisherId's
        };

        //when writestream returns false because highWaterMark is reached, stream will need to be drained
        if (!writer.write(record)) {
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

generateProducts();

