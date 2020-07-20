import React from 'react';
import styled from 'styled-components';
//import {shopping} from '@styled-icons/entypo/ShoppingCart'

const ShoppingCartButtonStyled = styled.button`
  background: #9cb946;
  width:100%;
  height: 54.66px;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 2px;
  color: white;
  font-size: 1.25em;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
`;

// const Shopping = styled(shopping)`
//   color: red;
// `

const ShoppingCartButton = (props) => {
  return (
    <ShoppingCartButtonStyled><i className="hb hb-shopping-cart-solid::before"></i> Add to Cart</ShoppingCartButtonStyled>
  );
};

export default ShoppingCartButton;


