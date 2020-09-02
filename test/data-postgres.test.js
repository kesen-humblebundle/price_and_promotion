const assert = require("assert");
const chai = require("chai");
const should = chai.should();
const { expect } = require("chai");


const { generateProducts } = require('../database-postgres/data-generator/generate-products.js');
const { writeData } = require('../database-postgres/writeToCSV.js');
const fs = require('fs').promises;

describe('Generate Product Data', () => {

  let record;

  before( async () => {
    
    //generate one record
    record = await generateProducts();
    
  });

  it('should return an object', (done) => {
    expect(record).to.be.an('object');
    done();
  });

  it('should have 3 properties', (done) => {
    expect(record).to.have.property('name');
    expect(record).to.have.property('base_price');
    expect(record).to.have.property('publisherId');
    done();
  });

  it('all properties are the correct data type', (done) => {
    expect(record.name).to.be.a('string');
    expect(record.base_price).to.be.a('number');
    expect(record.publisherId).to.be.a('number');
    done();
  });
  
  it('base price should be between 5 and 100',  (done) => {
    expect(record.base_price).to.be.above(5);
    expect(record.base_price).to.be.below(100);
    done();
  });

  it('publisher id is between 1 and 5M',  (done) => {
    expect(record.publisherId).to.be.above(1);
    expect(record.publisherId).to.be.below(5e6);
    done();
  });
});

describe('CSV file for Products',  () => {

  let dataArray;

  before( async () => {
    
    //10 records, generate products func, name of file
    await writeData(10, generateProducts, 'exampleProductData');
   
    let data = await fs.readFile('./database-postgres/csv/exampleProductData.csv', 'utf8');
    dataArray =  data.split(/\r?\n/).filter((row) => row.length > 0); //array of records with data
    
  });


  it('there are 10 records', async () => {
    expect(dataArray).to.have.lengthOf(10);
  });

  it('there are 3 columns per record', async () => {
    dataArray.forEach( (row) => {
      expect(row.split(',')).to.have.lengthOf(3);
    })
  
  });

});


