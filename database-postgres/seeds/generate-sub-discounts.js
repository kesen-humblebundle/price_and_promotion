const faker = require('faker');
const fs = require('fs');

//npm package to convert to csv and takes fs.createWriteStream as an argument for one of its methods
const csvWriter = require('csv-write-stream');
const writer = csvWriter({sendHeaders: false});

//creates csv file of 10M subscription discounts per productId
const generateSubscriptionDiscounts = () => {

  writer.pipe(fs.createWriteStream('./database-postgres/csv/subscription_discounts.csv'));

  (async () => {
    try {
      for (let i = 0; i < 1e7; i++) {
 
        //one row of data
        let record = {
          discount: faker.random.number({min: 10, max: 20}),
          productId: i, //1-10M productId's
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

generateSubscriptionDiscounts();
