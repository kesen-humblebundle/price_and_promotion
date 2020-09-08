const mongoose = require('mongoose');
const faker = require('faker');
require('dotenv').config();
const dbConnectionURI = process.env.DB_NAME;
const gameModel = require('../database/index.js');
const gameData = {
  price: faker.commerce.price(10, 100, 2, '$'),
  discount: faker.finance.amount(1, 9, 0, '$'),
  start: faker.date.recent(5),
  expiry: addDays(faker.date.recent(5), 25)
};

//expiry date helper function, which supports changing length of promotions
function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
};

describe('Game Model Test', () => {
  // connect to the MongoDB Memory Server
  beforeAll(async () => {
    await mongoose.connect(global.dbConnectionURI, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

// Game object with Id should be defined when successfully saved to MongoDB
  it('should create & save a game successfully', async () => {
    const validGame = new PriceAndPromo(gameData);
    const savedGame = await validGame.save();

    expect(savedGame.product_id).toBeDefined();
    expect(savedGame.price).toBe(gameData.price);
    expect(savedGame.discount).toBe(gameData.discount);
    expect(savedGame.start).toBe(gameData.start);
    expect(savedGame.expiry).toBe(gameData.expiry);
  });

  // Test Schema is working!
  // Should not be able to add in any field that isn't defined in this schema
  it('should insert game successfully, but field not defined in schema should be undefined', async () => {
    const gameWithInvalidField = new PriceAndPromo({
      price: '$29.00',
      discount: '$8',
      start: faker.date.recent(5),
      expiry: addDays(start, 25)
    });
    const savedGameWithInvalidField = await gameWithInvalidField.save();
    expect(savedGameWithInvalidField.product_id).toBeDefined();
    expect(savedGameWithInvalidField.genre).toBeUndefined();
  });

  // Test Validation is working!
  // Should message error when missing fields.
  it('create game without required fields should fail', async () => {
    const gameWithoutRequiredField = new PriceAndPromo({ price: '$50.00' });
    let err;
    try {
      const savedGameWithoutRequiredField = await gameWithoutRequiredField.save();
      error = savedGameWithoutRequiredField;
    } catch (error) {
      err = error
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    expect(err.errors.price).toBeDefined();
  });

 
})

