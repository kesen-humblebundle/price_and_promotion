
var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server/index.js");
let should = chai.should();
chai.use(chaiHttp);

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
    it('it should not POST a book without a product_id field', (done) => {
      let priceAndPromosMissingField = {
        "price":"30.00",
        "discount":"6",
        "start":"2020-08-22T02:10:58.255Z",
        "expiry":"2020-09-16T02:10:58.255Z"
      };
      chai.request(server)
        .post('/PriceAndPromotion')
        .send(priceAndPromosMissingField)
        .end((err, res) => {
          res.should.have.status(400);
          res.text.should.equal('Missing Field(s)');
          done();
        });
    });
  
    it('it should POST a book with all fields completed', (done) => {
      let priceAndPromosComplete = {
        "product_id":200,
        "price":"30.00",
        "discount":"6",
        "start":"2020-08-22T02:10:58.255Z",
        "expiry":"2020-09-16T02:10:58.255Z"
      };
      chai.request(server)
        .post('/PriceAndPromotion')
        .send(priceAndPromosComplete)
        .end((err, res) => {
          res.should.have.status(201);
          res.text.should.equal('Post Successful');
          done();
        });
    });
  });

  describe('/PUT/:product_id', () => {
    it('it should UPDATE the price given the id and new price', (done) => {
      chai.request(server)
      .put('/PriceAndPromotion/200')
      .send({"price": "9.00"})
      .end((err, res) => {
            res.should.have.status(200);
            res.text.should.eql('Update Successful');
        done();
      });
    });
  });

  describe('/DELETE/:product_id', () => {
    it('it should delete price and promo record given the id', (done) => {
      chai.request(server)
      .delete('/PriceAndPromotion/200')
      .end((err, res) => {
            res.should.have.status(200);
            res.text.should.eql('Delete Successful');
        done();
      });
    });
  });

});