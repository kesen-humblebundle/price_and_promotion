const faker = require('faker');
const fs = require('fs');

const moment = require('moment');


//npm package to convert to csv and takes fs.createWriteStream as an argument for one of its methods
const csvWriter = require('csv-write-stream');
const writer = csvWriter({sendHeaders: false});

//creates csv file of 10M general discounts
const generateGeneralDiscounts = () => {

  writer.pipe(fs.createWriteStream('./database-postgres/csv/general_discounts.csv'));

  (async () => {
    try {
      for (let i = 0; i < 1e7; i++) {

        //create 14 day range promotional discount
          
        let days = faker.random.number({min: 1, max: 183}); //gives a random number of days within a 6 month period

        let start = moment().add(days, 'days');
        let end = moment(start).add(14, 'days');

        //format date to month, day, year
        start = moment(start).format('YYYYMMDD');
        end = moment(end).format('YYYYMMDD');
        

        //one row of data
        let record = {
          discount: faker.random.number({min: 5, max: 95}),
          productId: faker.random.number({min: 1, max: 1e7}), //1-10M productId's
          start: start,
          end: end
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

generateGeneralDiscounts();
