const { nano } = require('./index.js');
require("dotenv").config();
const { COUCHDB_URI } = process.env;
const {generateProductsForCouch} = require('../data-generator/generate-products-couch.js');

(async () => {
 
    const database = 'priceandpromotions'
    const databases = await nano.db.list();
    
    //creates database if it does not exist
    !databases.includes(database) ? await nano.db.create(database) : null;

    //use database
    let priceandpromotions = nano.use(database);

    let docs = [];

    //pushes a document to array, for every 5000, it will do a bulk insert to db
    for (let i = 1; i <= 1e4; i++) {

      await docs.push(generateProductsForCouch(String(i)));

      if(docs.length === 5e3) {
        await priceandpromotions.bulk({docs});
        docs = [];
      } 
    }
 


 })()
 .catch( err => console.log(err));

