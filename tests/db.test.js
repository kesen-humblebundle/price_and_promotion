const assert = require("assert");
const chai = require("chai");
const should = chai.should();
const { expect } = require("chai");
const fs = require('fs').promises;

const { generateProducts } = require('../database/data-generator/generate-products.js');
const { writeData } = require('../database/writeToCSV.js');
// const createTables = require('./db-setup.js');

describe('Generate Product Data', () => {

  let record;

  before( async () => {
    
    //generate one record
    record = await generateProducts();
    
  });

  it('should return an object', () => {
    expect(record).to.be.an('object');
  });

  it('should have 3 properties', (done) => {
    expect(record).to.have.property('name');
    expect(record).to.have.property('base_price');
    expect(record).to.have.property('publisher_id');
    done();
  });

  it('all properties are the correct data type', (done) => {
    expect(record.name).to.be.a('string');
    expect(record.base_price).to.be.a('number');
    expect(record.publisher_id).to.be.a('number');
    done();
  });
  
  it('base price should be between 5 and 100',  (done) => {
    expect(record.base_price).to.be.above(5);
    expect(record.base_price).to.be.below(100);
    done();
  });

});

describe('CSV file for Products',  () => {

  let dataArray;

  before( async () => {
    
    //10 records, generate products func, name of file
    await writeData(10, generateProducts, 'exampleProductData');
   
    let data = await fs.readFile('/Users/krissy/Documents/Codes/rpt21-SDC/price_and_promotion/database/csv/exampleProductData.csv', 'utf8');
    dataArray =  data.split(/\r?\n/).filter((row) => row.length > 0); //array of records with data
    
  });


  it('there are 10 records with headers', async () => {
    expect(dataArray).to.have.lengthOf(11);
  });

  it('there are 3 columns per record', async () => {
    dataArray.forEach( (row) => {
      expect(row.split(',')).to.have.lengthOf(3);
    })
  
  });

});


//TODO: write tests for actual database 
// describe('Database',  () => {

//   before( async () => {
    
//     const inputFile = '/Users/krissy/Documents/Codes/rpt21-SDC/price_and_promotion/database-postgres/csv/exampleProductDataProducts.csv';
//     const table = 'products';
//     const headers = 'game_name,base_price,publisher_id';

//      createTables();
//     // // Deletes ALL existing entries
//     // await db(`${table}`).del();

//     // //set sequence value to 1
//     // await db.raw(`ALTER SEQUENCE ${table}_id_seq RESTART WITH 1;`);
    
//     // // Inserts seed entries
//     // await db.raw(`COPY ${table} (${headers}) FROM '${inputFile}' WITH (FORMAT CSV, DELIMITER ',');`);
      
//   });


//   xit('', async () => {
//     expect(dataArray).to.have.lengthOf(10);
//   });

//   xit('', async () => {
//     dataArray.forEach( (row) => {
//       expect(row.split(',')).to.have.lengthOf(3);
//     })
  
//   });

// });


