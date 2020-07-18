require('dotenv').config(); //loading environment vars
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');
const bodyParser = require('body-parser');
const PriceAndPromo = require('../database/index.js');
const cors = require('cors');
const { nextTick } = require('process');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });

//returns an object that includes price, promotion/discount, start date, and expiry
app.get('/PriceAndPromotion/:product_id', (req, res) => {
  console.log('Req rcvd by server with:', req.params);
  let id = req.params.product_id;
  console.log('urlId: ', id);
  PriceAndPromo.find({ product_id: id })
    .then(game => {
      console.log('data from db: ', game);
      if (!game) {
        res.status(400).send('No game to return');
      } else {
        let data = {
          price: game[0].price,
          promotion: game[0].discount,
        }
        console.log('data ready to go to client: ', data);
        res.status(200).send(data);
      }
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

//based on product number from URL,returns an object that includes price, promotion/discount, start date, and expiry
app.get('/:product_id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(PORT, (error) => {
  if (error) {
    console.log('Server connection failed: ', error);
  }
  console.log('Server listening on port ', PORT);
});


