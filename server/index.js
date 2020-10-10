const newrelic = require('newrelic');
const compression = require('compression');
require('dotenv').config(); //loading environment 
const express = require('express');
const redis = require("redis");
const { promisify } = require("util");
const app = express();

//connect to redis 
const redis_options = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PW};

const PORT = process.env.PORT || 3006;

//configure redis client on port 6379
const redis_client = redis.createClient(redis_options);
const getAsync = promisify(redis_client.get).bind(redis_client);

redis_client.on('connect', () => console.log('Redis Client Connected'));
redis_client.on('error', (err) => console.log('Something went wrong ' + err));
redis_client.unref();

const path = require('path');
const cors = require('cors');

const getPriceAndPromotion = require('../database/database-postgres/query-functions/getPriceandPromotions.js');
const deleteProductandDiscounts = require('../database/database-postgres/query-functions/deleteProductandDiscounts.js');
const updateRecords = require('../database/database-postgres/query-functions/updateRecords.js');
const insertRecords = require('../database/database-postgres/query-functions/insertRecords.js');

app.use(compression()); //headers for post/puts should be Cache-Control: no-transform

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//TODO: Refactor to have routes, models, and middelware to handle errors

//returns an object that includes price, promotion/discount
app.get('/PriceAndPromotion/:product_id', (req, res) => {
 
  let id = (req.params.product_id);
  if(isNaN(id)){
    res.status(400).send('Invalid Product Id');
  } else {
 
    getAsync(String(id))
      .then( (data) => {
        
        if (data) {
          
          console.log(data);
          res.status(200).send(data);

        } else {

          id = [Number(req.params.product_id)];
          
          getPriceAndPromotion(id)
            .then( (response) => {
              
              let {id, base_price, discount, max} = response[0];
              let price = base_price;
              let promotion = base_price * (discount/100);
              promotion = Number(promotion.toFixed(2));
      
              //check for general or publisher discount to calculate new price for UI;
              if(max) {
                price *= (1 - max/100)
                price = Number(price.toFixed(2));
              }
                
              console.log({price: promotion})

              //add data to Redis
              redis_client.set(String(id), JSON.stringify({price, promotion}), redis.print);

              let date = new Date();
              date.setDate(date.getDate() + 1); //next day
              date.setHours(0,0,0,0); //resets to midnight
              let unixTime = new Date(date).getTime() / 1000;

              redis_client.expireat(String(id), unixTime, redis.print) //set key to expire
                  
              res.status(200).send({price, promotion});
            })
            .catch( (err) => {
              res.status(404).send('Data Not Found');
              console.log(err);
            })
        }

      })
      .catch( (err) => {
        console.log(err);
      });
  }
});

//returns price and promos for an array of product ids
app.get('/PriceAndPromotion/multiple/:product_ids', async (req, res) => {

  try {
    if(!req.params.product_ids){
      res.status(400).send('No Product Id');
    } else if (req.params.product_ids) {
      
      let arrayOfIds = JSON.parse(req.params.product_ids);
          
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

//inserts one record
app.post('/PriceAndPromotion', (req, res) => {

  let data = req.body;
  console.log(data);

  insertRecords(data)
    .then( (response) => res.status(201).send({"NumberOfInsertedRecords": response.length, "ids": response}))
    .catch( (err) => res.status(400).send({error: JSON.stringify(err)}));
});

//updates a record based on product id
app.put('/PriceAndPromotion', (req, res) => {

  let data = req.body;

  updateRecords(data)
    .then( (id) => {
      redis_client.del(String(id)); //remove old data
      res.status(200).send(`Updated Product Id ${id[0]} Successfully`);
    })
    .catch( (err) => {
      console.log(err);
      res.status(400).send({'Update Unsuccessful': JSON.stringify(err)});
    } )

});

//deletes a record based on product id
app.delete('/PriceAndPromotion/:product_id', (req, res) => {

  let id = req.params.product_id;

  deleteProductandDiscounts(id)
  .then( (response) => {
    redis_client.del(String(id)); //remove old data
    if(response === 0) {
      res.status(400).send('Record is not found');
    } else {
      res.status(200).send(`Deleted Product Id ${id} Successfully`);
    }
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

