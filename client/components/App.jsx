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

    const requestURL = `http://ec2-52-14-126-227.us-east-2.compute.amazonaws.com:3001/api/${productId}?type=cover`;

    return axios.get(requestURL)
      .then((response) => {
        let data = response.data;

        console.log('Success getting image from Micko: ', data);
        return data;
      })
      .catch((err) => {
        console.log('Error getting image from Micko: ', err);
        return [];
      });

    //return requestURL;
  }

  fetchProductPlatform(productId) {
    const requestURL = `http://ec2-18-188-248-102.us-east-2.compute.amazonaws.com:3002/system_req/platforms/${productId}`
    return axios.get(requestURL, { crossdomain: true })
      .then((response) => {
        let data = response.data;
        console.log('Success getting platforms from Chris: ', data);
        return data;
      })
      .catch((err) => {
        console.log('Error getting platforms from Chris: ', err);
        return [];
      });
    //return { os: ["urlLinux", "urlWindows"] };
  }

  fetchProductPriceAndPromo(productId) {

    return axios.get(`/PriceAndPromotion/${productId}`)
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
    let data = {};
    this.fetchProductPriceAndPromo(productId)
      .then(ret => {
        data.price = ret.price;
        data.promotion = ret.promotion;
      })
    return this.fetchImage(productId)
      .then(image => {
        console.log('image returned fr promise: ', image)
        data.image = image;
        console.log('data looks like this so far: ', data);
        return this.fetchProductPlatform(productId)
          .then(platforms => {
            console.log("platforms data: ", platforms)
            data.platforms = platforms;
            this.setState(data);
          })
      })
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
