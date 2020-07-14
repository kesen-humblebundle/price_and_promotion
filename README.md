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
  install mongo,
  start mongodb from project root
  in command line, run 'systemctl status mongod' to confirm if already running
  if db server not already running, run systemctl start mongod
  run npm run seedDB


## Development
Installing Dependencies
From within the root directory:
npm install -g webpack
npm install

## URL:
https://127.0.0.1:3006