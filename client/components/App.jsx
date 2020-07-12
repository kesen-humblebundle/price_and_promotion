import React from 'react';
import styled from 'styled-components';
import PriceAndPromoContainer from "./PriceAndPromoContainer.jsx";
import PriceImage from "./PriceImage.jsx"
import axios from 'axios';

const AppWrapper = styled.div`
  width: 370.5px;
  height: 431.54px;
`;
const AppStyled = styled.div`
  background-color: #1b1e1b;
`;

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

  componentDidMount() {
    let productId = 5;

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
      <AppWrapper>
        <AppStyled>
          <PriceImage image={this.state.image} />
          <PriceAndPromoContainer values={{
            platforms: this.state.platforms,
            price: this.state.price,
            promotion: this.state.promotion
          }} />
        </AppStyled>
      </AppWrapper>
    );
  }
}

export default App;
  // display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: repeat(6, 1fr);
  // grid-column-gap: 0px;
  // grid-row-gap: 0px;