require('dotenv').config(); //loading environment lets
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { nextTick } = require('process');
// const { get } = require('http');
// const { ESRCH } = require('constants');

const getPriceAndPromotion = require('../database/database-postgres/query-functions/getPriceandPromotions.js');
const deleteProductandDiscounts = require('../database/database-postgres/query-functions/deleteProductandDiscounts.js');
const updateRecords = require('../database/database-postgres/query-functions/updateRecords.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//TODO: Refactor to have routes, models, and middelware to handle errors

//returns an object that includes price, promotion/discount
app.get('/PriceAndPromotion/:product_id', (req, res) => {

  if(!req.params.product_id) {
    res.status(400).send('No Product Id');
  } else if (req.params.product_id) {
    let id = [Number(req.params.product_id)];
  } else if(isNaN(id[0])){
    res.status(400).send('Invalid Product Id');
  } else {

    getPriceAndPromotion(id)
      .then( (response) => {
        console.log(response);
        let {base_price, discount, max} = response[0];
        let price = base_price;
        let promotion = base_price * (discount/100);
        promotion = Number(promotion.toFixed(2));
        //check for general or publisher discount to get new base price;
        if(max) {
          price *= (1 - max/100)
          price = Number(price.toFixed(2));
        }
        res.status(200).send({price, promotion});
      })
      .catch( (err) => {
        res.status(404).send('Data Not Found');
        console.log(err);
      })
  }
});

//returns price and promos for an array of product ids
app.get('/PriceAndPromotion/multiple/:product_ids', async (req, res) => {

  try {
    if(!req.params.product_ids){
      res.status(400).send('No Product Id');
    } else if (req.params.product_ids) {
      let arrayOfIds = req.params.product_ids;
      await arrayOfIds.map( (id) => {
        if(isNaN(id) || id <= 0){
          res.status(400).send('Invalid Product Id');
        }
      });
    } else {
    
      let arrayOfRecords = await getPriceAndPromotion(arrayOfIds);

      let arrayOfPriceandPromtions = await arrayOfRecords.map( record => {

        let {id, base_price, discount, max} = record;
        let product_id = id;
        let price = base_price;
        let promotion = base_price * (discount/100);
        promotion = Number(promotion.toFixed(2));
        
        if(max) {
          price *= (1 - max/100)
          price = Number(price.toFixed(2));
        }

        return {product_id, price, promotion};

      });
    
      res.status(200).send(arrayOfPriceandPromtions);
    }
    
  } catch (err) {
    res.status(404).send('Data Not Found');
    console.log(err);
  }

});



//based on product number from URL,returns an object that includes price, promotion/discount, start date, and expiry
app.get('/:product_id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

/**     Extend CRUD Operations      **/
//creates a new product
app.post('/PriceAndPromotion', (req, res) => {

  let priceAndPromotionData = req.body;
  console.log(priceAndPromotionData);

  //needs to have all fields to post record
  if(!priceAndPromotionData.product_id || !priceAndPromotionData.price || !priceAndPromotionData.start || !priceAndPromotionData.expiry) {
    res.status(400).send('Missing Field(s)');
  } else {
    PriceAndPromo.create(priceAndPromotionData)
    .then( () => {
      res.status(201).send('Post Successful');
    })
    .catch( (err) => {
      res.status(404).send(err);
    });
  }
});

//updates a record based on product id
app.put('/PriceAndPromotion', (req, res) => {

  let data = req.body;

  updateRecords(data)
    .then( (id) => {
      res.status(200).send(`Updated Product Id ${id[0]} Successfully`);
    })
    .catch( (err) => {
      console.log(err);
      res.status(400).send({'Update Unsuccessful': err});
    } )

});

//deletes a record based on product id
app.delete('/PriceAndPromotion/:product_id', (req, res) => {

  let id = req.params.product_id;

  deleteProductandDiscounts(id)
  .then( (response) => {
    res.status(200).send('Delete Successful');
  })
  .catch( (err) => {
    res.status(400).send({error: JSON.stringify(err)});
  })
});

module.exports = app.listen(PORT, (error) => {
  if (error) {
    console.log('Server connection failed: ', error);
  }
  console.log('Server listening on port ', PORT);
});

