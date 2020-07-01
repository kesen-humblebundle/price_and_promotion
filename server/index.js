require('dotenv').config(); //loading environment vars
const express = require('express');
const app = express()
const PORT = process.env.PORT;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');

app.use(express.static(__dirname + 'public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(('Hello world'));
});

//returns an object that includes price, promotion/discount, start date, and expiry
app.get('PriceAndPromotion/:product_id', (req, res) => {
  console.log('Req rcvd by server with:', req.params);
  let id = req.params.product_id;
  console.log('Patch req recvd urlId: ', id);

  getGameDocument(id);

});

let getGameDocument = (id) => {
  db.findOne({ _id: id })
  .then((game) => {
    if (!game) {
      res.status(400).send('No game to return');
    } else {
      res.status(200).send({ game });
    }
  })
  .catch((err) => {
    res.status(404).send(err);
  });
}

app.listen(PORT, (error) => {
  if (error) {
    console.log('Server connection failed: ', error);
  }
  console.log('Server listening on port ', PORT);
});

module.exports = getGameDocument
