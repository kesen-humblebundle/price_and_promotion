import React from "react";
import styled from 'styled-components';
import Platforms from "./Platforms.jsx";
import Price from "./Price.jsx";
import Promotion from "./Promotion.jsx";
import ShoppingCartButton from "./ShoppingCartButton.jsx";
import WishlistButton from "./WishlistButton.jsx";


const PriceContainer = styled.div`
  width: 370.51px;
  height: 212.31px;
  background-color:  #1b1e1b;
  text-align: center;
`;

const PriceAndPromoContainer = (props) => {
  let values = props.values;
  console.log('priceAndPromos props: ', props);
  return (

    <PriceContainer className='pricePromo-container-outer'>
      <Platforms className='pricePromo-container-outer-platforms' platforms={values.platforms} />
      <Price className='pricePromo-container-outer-price' price={values.price} />
      <Promotion className='pricePromo-container-outer-promotion' promotion={values.promotion} />
      <ShoppingCartButton />
      <WishlistButton />
    </PriceContainer>

  );
};

export default PriceAndPromoContainer;