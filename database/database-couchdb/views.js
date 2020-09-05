function(doc) {
  if(doc.type === "products" && doc.type === "publisher_discounts") {
      if(doc.publisher_id === doc.publisher) {
        emit([doc._id, doc.start, doc.end], doc.discount, doc.subscription_discount);
      }
    }
  if(doc.type === "products" && doc.type === "general_discounts") {

    if(doc.productId === doc._id) {
      emit([doc._id, doc.start, doc.end], doc.discount, doc.subscription_discount);
    }
  }
  
  emit(doc._id, subscription_discount);

}

//query for couchdb
// curl -X POST -H "Content-Type: application/json" -d '{"selector": {"_id": "1019"}}' 'http://student:student@127.0.0.1:5984/priceandpromotions/_find'