const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const priceAndPromoSchema = new mongoose.Schema({
  price: string,
  discount: string,
  start: {
    type: Date
  },
  date: { type: Date, default: Date.now },
  expiry: {
    type: Date
  },
},
);

const PriceAndPromo = mongoose.model('Blog', blogSchema);

module.exports = {
  priceAndPromoSchema
};
