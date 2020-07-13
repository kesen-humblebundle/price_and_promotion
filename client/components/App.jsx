import React from 'react';
import styled from 'styled-components';
import PriceAndPromoContainer from "./PriceAndPromoContainer.jsx";
import PriceImage from "./PriceImage.jsx"
import axios from 'axios';

const AppStyled = styled.div`
  font-family: 'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 13px;
  width:370.5px;
  height: 431.5px;
  background: #1b1e1b;
`;

const DEFAULT_PRODUCT_ID = 21;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  fetchImage(productId) {
    return "url1";
  }

  fetchProductPlatform(productId) {
    return { os: ["urlLinux", "urlWindows"] };
  }

  fetchProductPriceAndPromo(productId) {

    return axios.get(`http://localhost:3001/PriceAndPromotion/${productId}`)
      .then((response) => {
        let data = response.data;
        console.log('Success getting price and promotion data: ', data);
        return data;
      })
      .catch((err) => {
        console.log('Error updating views: ', err);
        return [];
      });
  }

  getProductId(path) {
    console.log('this.getProductId call success path=', path);
    if (path !== null) {
      let pathArray = path.split('/');
      if (pathArray.length > 0) {
        let productId = Number(pathArray[pathArray.length - 1]);
        if (productId !== NaN) {
          console.log('success pulling and parsing id: ', productId);
          return (productId);
        }
      }
    }
    return DEFAULT_PRODUCT_ID;
  }

  getProductIdFromUrl() {
    console.log('get id from URL called successfully. ', window.location.pathname);
    return this.getProductId(window.location.pathname);
  }

  componentDidMount() {

    let productId = this.getProductIdFromUrl();

    this.fetchProductPriceAndPromo(productId).then(ret => {
      let data = {};

      data.price = ret.price;
      data.promotion = ret.promotion;
      data.image = this.fetchImage(productId);
      data.platforms = this.fetchProductPlatform(productId);

      console.log("data: ", data);

      this.setState(data);
    });
  }

  render() {

    if (!this.state)
      return (null);
    console.log('state in render: ', this.state)
    return (
      <AppStyled>
        <PriceImage image={this.state.image} />
        <PriceAndPromoContainer values={{
          platforms: this.state.platforms,
          price: this.state.price,
          promotion: this.state.promotion
        }} />
      </AppStyled>
    );
  }
}

export default App;
