/* db code for mongo */

//returns an object that includes price, promotion/discount
PriceAndPromo.find({ product_id: id })
.then(game => 
  {
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

//returns price and promos for an array of product ids
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