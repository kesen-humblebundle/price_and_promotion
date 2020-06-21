const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/PriceAndPromo', {
  useMongoClient: true,
});

const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('openUri', function () {
  console.log('mongoose connected successfully');
});

const priceAndPromoSchema = mongoose.Schema({
  price: String,
  discount: String,
  start: {
    type: Date
  },
  date: { type: Date, default: Date.now },
  expiry: {
    type: Date
  },
});

const PriceAndPromo = mongoose.model('PriceAndPromo', priceAndPromoSchema);

module.exports.db = db;