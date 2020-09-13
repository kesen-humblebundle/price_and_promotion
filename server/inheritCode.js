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