const mongoose = require('mongoose');
require('dotenv').config();
const dbConnectionURI = process.env.DB_NAME;

mongoose.connect(`mongodb://${dbConnectionURI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('openUri', function () {
  console.log('mongoose connected successfully');
});

const priceAndPromoSchema = mongoose.Schema({
  price: Number,
  discount: Number,
  start: {
    type: Date
  },
  expiry: {
    type: Date
  },
});

const PriceAndPromo = mongoose.model('PriceAndPromo', priceAndPromoSchema);

module.exports.db = db;
module.exports = PriceAndPromo;