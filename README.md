# Price and Promotion Service for HumbleBundle item page clone
Project description

Related Projects
https://github.com/KichiUeda/Chris-app-service-overview
https://github.com/KichiUeda/Rane-app-description-service
https://github.com/KichiUeda/Micko_App_images_service
https://github.com/KichiUeda/other_popular_games


## Table of Contents

Installation and Running
Requirements
Development
URL

## Installation and Running
The following steps should allow you to run this project locally.

Clone/download this repo

Add following environmental variables:
  PORT=3006
  DB_NAME='127.0.0.1:27017/PriceAndPromo'

Run install and start scripts
        npm install           # install dependencies
        npm run seedDB        # build and seed DB tables

        # For development
        npm run react:dev   # starts webpack in watch mode
        npm run server:dev  # starts nodemon

        # For production build
        npm run build      # create production build
        npm run start      # start node server

## Requirements
Note: this system uses MongoDB,follow these steps to ensure Mongo is installed and runnning
  install mongo, in command line
    npm install mongodb --save
  start mongodb from project root. in command line, run
    systemctl status mongod
  if db server not already running, run systemctl start mongod
  run npm run seedDB


## Development
Installing Dependencies
From within the root directory:
npm install -g webpack
npm install

## API

| HTTP Method | Route | Used For | Sample Data |
| ---- | ---- | ---- | ---- |
| GET | '/PriceAndPromotion/:product_id' | displays price and promotion based on product id in URL| `{"price": 20,"promotion": 6}` | 
| GET | '/PriceAndPromotion/multiple/:product_ids' | displays an array of price and promotion records for array of product ids in URL | `[{"product_id": 5,"price":39,"promotion": 7},{"product_id": 6,"price": 15,"promotion": 4},{"product_id": 7,"price": 59,"promotion": 5}]`|
| POST | '/PriceAndPromotion' | creates one record of price and promotional info  for a product | `{"product_id":200,"price":"20.00","discount":"6","start":"2020-08-22T02:10:58.255Z","expiry":"2020-09-16T02:10:58.255Z"}` |
| PUT | '/PriceAndPromotion' | updates a product, publishers, or subscription discounts record in the database | request body: {"id": "1" ,"table": "subscription_discounts", "update": {"column": value}}  |
| DELETE | '/PriceAndPromotion/:product_id' | deletes a price and promotion record based on product id in URL | |

## URL:
https://127.0.0.1:3006