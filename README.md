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
| GET | '/PriceAndPromotion/:product_id' | displays price, discount and start date based on product id in URL| `{ "_id" : ObjectId("5f41308b0b7e1f1e149894e6"), "product_id" : 1, "price" : "20.00", "discount" : "6", "start" : ISODate("2020-08-22T02:10:58.255Z"), "expiry" : ISODate("2020-09-16T02:10:58.255Z") }` | 
| GET | '/PriceAndPromotion/multiple/:product_ids' | displays an array of price and promo records for array of product ids in URL | |
| POST | '/PriceAndPromotion' | creates one price and promotion record for a product | |
| PUT | '/PriceAndPromotion/:product_id' | edits a price and promotion record based on product id in URL | |
| DELETE | '/PriceAndPromotion/:product_id' | deletes a price and promotion record based on product id in URL | |

## URL:
https://127.0.0.1:3006