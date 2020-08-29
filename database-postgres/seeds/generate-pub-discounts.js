const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

//npm package to convert to csv and takes fs.createWriteStream as an argument for one of its methods
const csvWriter = require('csv-write-stream');
const writer = csvWriter({sendHeaders: false});

//creates csv file of 5M discounts by publisher
const generatePublisherDiscounts = () => {

  writer.pipe(fs.createWriteStream('./database-postgres/csv/publisher_discounts.csv'));

  (async () => {
    try {
      for (let i = 0; i < 5e6; i++) {

        //create 14 day range promotional discount
        let days = faker.random.number({min: 1, max: 183}); //gives a random number of days within a 6 month period
        let start = moment().add(days, 'days');
        let end = moment(start).add(14, 'days');

        //format date to month, day, year
        start = moment(start).format('YYYYMMDD');
        end = moment(end).format('YYYYMMDD');

        //a row of data
        let record = {
          discount:  faker.random.number({min: 5, max: 95}),
          publisherId:  faker.random.number({min: 1, max: 5e6}), //1-5M publisherId's,
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

generatePublisherDiscounts();
