const db = require('./db.js');
const moment = require('moment');

const getToday = () => {
  let today = new Date();
  today = moment(today).format('YYYYMMDD');
  return today;
}

const getDiscount = (id) => {


  db('')

}