require('dotenv').config(); //loading environment lets
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;
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

  let id = req.params.product_id;

  PriceAndPromo.find({ product_id: id })
    .then(game => {
      if (!game) {
        res.status(400).send('No game to return');
      } else {
        let data = {
          price: game[0].price,
          promotion: game[0].discount,
        }
        res.status(200).send(data);
      }
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

//returns price and promos for an array of product ids
app.get('/PriceAndPromotion/multiple/:product_ids', (req, res) => {
  let arrayOfIds = JSON.parse(req.params.product_ids);
  let dataBundle = async () => {
    let priceAndPromosArray = []
    for (let i = 0; i < arrayOfIds.length; i++) {
      await PriceAndPromo.find({ product_id: arrayOfIds[i] })
        .then((doc) => {
          let data = {
            product_id: doc[0].product_id,
            price: doc[0].price,
            promotion: doc[0].discount
          }
          priceAndPromosArray.push(data);
        })
        .catch(err => console.log(err))
    }
    return priceAndPromosArray;
  }
  Promise.resolve(dataBundle()).then((data) => {
    res.status(200).send(data);
  })
});

//based on product number from URL,returns an object that includes price, promotion/discount, start date, and expiry
app.get('/:product_id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

//creates a new product
app.post('/PriceAndPromotion', (req, res) => {

  let priceAndPromotionData = req.body;

  PriceAndPromo.create(priceAndPromotionData)
  .then( () => {
    res.status(200).end();
  })
  .catch( (err) => {
    res.status(404).send(err);
  });

});

//edits a record based on product id
app.put('/PriceAndPromotion/:product_id', (req, res) => {

  let id = req.params.product_id;
  let newData = req.body;

  return PriceAndPromo.updateOne({ product_id: id }, newData)
  .then( () => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(404).send(err);
  })
});

//deletes a record based on product id
app.delete('/PriceAndPromotion/:product_id', (req, res) => {

  let id = req.params.product_id;

  PriceAndPromo.deleteOne({ product_id: id })
  .then( () => {
    res.status(200).end();
  })
  .catch( err => {
    res.status(404).send(err);
  });

});

app.listen(PORT, (error) => {
  if (error) {
    console.log('Server connection failed: ', error);
  }
  console.log('Server listening on port ', PORT);
});

