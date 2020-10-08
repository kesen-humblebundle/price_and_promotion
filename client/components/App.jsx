import React from 'react';
import styled from 'styled-components';
import PriceAndPromoContainer from "./PriceAndPromoContainer.jsx";
import PriceImage from "./PriceImage.jsx"
import axios from 'axios';
import samplePlatforms from '../sampleData/samplePlatforms.js';
import sampleImage from '../sampleData/sampleImage.js';

const AppStyledForPricePromo = styled.div`
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

  /* Inherited Code, Not Needed */
  fetchImage(productId) {

    const requestURL = `http://ec2-52-14-126-227.us-east-2.compute.amazonaws.com:3001/api/${productId}?type=cover`;

    return axios.get(requestURL)
      .then((response) => {
        let data = response.data;
        return data;
      })
      .catch((err) => {
        return [];
      });
  }

  /* Inherited Code, Not Needed */
  fetchProductPlatform(productId) {

    const requestURL = `http://ec2-3-129-17-68.us-east-2.compute.amazonaws.com:3002/system_req/platforms/${productId}`
    
    return axios.get(requestURL, { crossdomain: true })
      .then((response) => {
        let data = response.data;
        return data;
      })
      .catch((err) => {
        return [];
      });
  }

  fetchProductPriceAndPromo(productId) {

    const deployedURL = `http://ec2-3-21-76-100.us-east-2.compute.amazonaws.com:3006/PriceAndPromotion/${productId}`;
    const localURL = `http://localhost:3006/PriceAndPromotion/${productId}`;

    return axios.get(deployedURL)
      .then((response) => {
        let data = response.data;
        return data;
      })
      .catch((err) => {
        return [];
      });
  }

  getProductId(path) {

    let pathArray = path.split('/');
    if (pathArray.length > 0) {
      let productId = Number(pathArray[1]);
      if (productId !== NaN) {
        return (productId);
      }
    }
  }

  getProductIdFromUrl() {
    if (window.location.pathname === '/') {
      return 21;
    }
    return this.getProductId(window.location.pathname);
  }

  componentDidMount() {

    let productId = this.getProductIdFromUrl();
    let data = {};
    this.fetchProductPriceAndPromo(productId)
      .then(ret => {
        data.price = ret.price;
        data.promotion = ret.promotion;
        data.image = sampleImage;
        data.platforms =  samplePlatforms;
        this.setState(data);
      })

     /*     Inherited Code dependent on other services   */

    // return this.fetchImage(productId)
    //   .then(image => {
    //     data.image = image;
    //     return this.fetchProductPlatform(productId)
    //       .then(platforms => {
    //         data.platforms = platforms;
    //         this.setState(data);
    //       })
    //   })
  }

  render() {

    if (!this.state)
      return (null);
    return (
      <AppStyledForPricePromo className='pricePromo-app'>
        <PriceImage className='pricePromo-app-image-component' image={this.state.image} />
        <PriceAndPromoContainer className='pricePromo-app-price-promo-component' values={{
          platforms: this.state.platforms,
          price: this.state.price,
          promotion: this.state.promotion
        }} />
      </AppStyledForPricePromo>
    );
  }
}

export default App;
