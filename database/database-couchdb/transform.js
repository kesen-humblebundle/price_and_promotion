// example transformation function
// -- split a row into multiple docs
var mytransform = function (doc) {

  
  var product = {
    type: "product"
  }

  return product;
}

module.exports = mytransform;