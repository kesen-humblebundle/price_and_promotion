
var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server/index.js");
let should = chai.should();
chai.use(chaiHttp);
const insertRecords = require('../database/database-postgres/query-functions/insertRecords.js');

describe("Crud Operations", function(){

  describe('/GET/:product_id', () => {
    it("should get price and promotion for product_id 1 ", done=>{
      chai.request(server)
        .get('/PriceAndPromotion/1')
        .end((err,res)=>{
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('price');
          res.body.should.have.property('promotion');
          done();
        })
    })
  })

  describe('/GET/:product_ids', () => {
    it("should get price and promotion for multiple product id's", done=>{
      chai.request(server)
        .get('/PriceAndPromotion/multiple/[1,3,10]')
        .end((err,res)=>{
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(3);
          done();
        })
    })
  })

  describe('/POST', () => {
    it('it should not POST a discount without a product_id field', (done) => {
      let priceAndPromosMissingField = {
        "table": "general_discounts",
        "insert":{
          "discount":"6",
          "start":"2020-10-11",
          "end":"2020-10-25"
        }
      };
      chai.request(server)
        .post('/PriceAndPromotion')
        .send(priceAndPromosMissingField)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  
    it('it should not POST a discount with an invalid product id', (done) => {
      let priceAndPromosComplete = {
        "table": "general_discounts",
        "insert":{
          "product_id": "5000000000",
          "discount":"6",
          "start":"2020-10-11",
          "end":"2020-10-25"
        }
      };
      chai.request(server)
        .post('/PriceAndPromotion')
        .send(priceAndPromosComplete)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
    });

    it('it should POST a discount with all fields completed', (done) => {
      let priceAndPromosComplete = {
        "table": "general_discounts",
        "insert":{
          "product_id": "500000",
          "discount":"6",
          "start":"2020-10-11",
          "end":"2020-10-25"
        }
      };
      chai.request(server)
        .post('/PriceAndPromotion')
        .send(priceAndPromosComplete)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('NumberOfInsertedRecords');
          res.body.should.have.property('ProductIds');
          done();
        });
    });
  });

  describe('/PUT/:product_id', () => {
    let body = {
      "id": "1",
      "table": "products",
      "update":{
        "base_price": "45"
      }
    };
    it('it should UPDATE the price given the id and new price', (done) => {
      chai.request(server)
      .put('/PriceAndPromotion')
      .send(body)
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.eql('Updated Product Id 1 Successfully');
        done();
      });
    });
  });

  describe('/DELETE/:product_id', () => {
    let insertedId;
    insertRecords({
      "table": "products",
      "insert": {
        "name": "test",
        "base_price": "45",
        "publisher_id": "1"
      }
    })
    .then( id => insertedId = id[0].id);
    it('it should delete price and promo record given the id', (done) => {
      chai.request(server)
      .delete(`/PriceAndPromotion/${insertedId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.eql(`Deleted Product Id ${insertedId} Successfully`);
        done();
      });
    });
  });

});