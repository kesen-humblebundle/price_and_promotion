# Price and Promotion Service 
Microservice for Humble Bundle item detail page clone. Modified legacy code to make a scalable app using PostgreSQL as the database.

>
><img src="https://github.com/krisdo/price_and_promotion/blob/master/test/LoadTesting_Caching_LoadBalancing.png" width="600"/>
><p>Stress Testing with Loader: 10,000 Clients per second for 20 seconds.</p>

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Installation and Setup](#Installation-and-Setup)
4. [Other Technologies](#Other-Technologies)
5. [Deployment](#Deployment)

## Usage

- URL: https://localhost:3006

### API
| HTTP Method | Route | Used For | Sample Data |
| ---- | ---- | ---- | ---- |
| GET | '/PriceAndPromotion/:product_id' | displays price and promotion based on product id in URL| `{"price": 20,"promotion": 6}` | 
| GET | '/PriceAndPromotion/multiple/:product_ids' | displays an array of price and promotion records for array of product ids in URL | `[{"product_id": 5,"price":39,"promotion": 7},{"product_id": 6,"price": 15,"promotion": 4},{"product_id": 7,"price": 59,"promotion": 5}]`|
| POST | '/PriceAndPromotion' | creates one record of price and promotional info  for a product | request body: `{"table":"general_discounts","insert":[{"discount":23,"start":"2021-01-10","end":"2021-01-24","product_id":"2"}]}` |
| PUT | '/PriceAndPromotion' | updates a product, publishers, or subscription discounts record in the database | request body: `{"id": "1" ,"table": "subscription_discounts", "update": {"column": value}}`|
| DELETE | '/PriceAndPromotion/:product_id' | deletes a price and promotion record based on product id in URL | |

## Requirements

- Node
- Express
- React
- PG
- Knex
- Axios
- Styled-components

## Installation and Setup

From within the root directory:

- Install Dependencies
```sh
 $ npm install 
```
- Generate fake data to CSV files
```sh
 $ npm run generateAll
```
- Seed PostgreSQL
```sh
 $ npm run seedPostgres
```
- Start app locally
```sh
 $ npm start 
```

## Other Technologies
- Nginx
- Redis
- Loader
- New Relic
- GatlingJS

## Deployment

Create a Docker image and spin a container by running docker-compose.yml

```sh
docker-compose up
```
