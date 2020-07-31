import React from 'react';
import styled from 'styled-components';
//import {shopping} from '@styled-icons/entypo/ShoppingCart'

const ShoppingCartButtonStyled = styled.button`
  background: #9cb946;
  height: 54.66px;
  width: 338.5px;
  margin: 0 auto;
  margin-bottom: 3px;
  color: white;
  font-size: 1.25em;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  &:hover {
    background: #708238;
  }
`;

const ShoppingCartButton = (props) => {
  return (
    <ShoppingCartButtonStyled className='pricePromo-shopping-cart-button'><i className="fa fa-shopping-cart"></i> Add to Cart</ShoppingCartButtonStyled>
  );
};

export default ShoppingCartButton;


