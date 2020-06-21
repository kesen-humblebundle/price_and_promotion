const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/uedaPriceAndPromo';

const db = mongoose.connect(mongoUri);

module.exports = db;