require('dotenv').config(); //loading environment lets
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

//returns an object that includes price, promotion/discount
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

//returns price and promos for an array of product ids
app.get('/PriceAndPromotion/multiple/:product_id', (req, res) => {
  console.log('Req rcvd by server with:', req.params);
  let arrayOfIds = JSON.parse(req.params.productId);
  let dataBundle = async () => {
    let priceAndPromosArray = []
    for (let i = 0; i < arrayOfIds.length; i++) {
      await PriceAndPromo.find({ product_id: arrayOfIds[i] })
        .then((docs) => {
          let data = {
            product_id: docs[0].product_id,
            price: docs[0].price,
            promotion: docs[0].discount
          }
          priceAndPromosArray.push(data);
          console.log('In server, price and promo array from db: ', priceAndPromosArray);
        })
        .catch(err => console.log(err))
    }
    return priceAndPromosArray;
  }
  Promise.resolve(dataBundle()).then((data) => {
    console.log('Shape of PriceAndPromo data: ', data)
    console.log('Sending data back to Other Popular Games client')
    res.status(200).send(data);
  })
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

// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });
