import React from 'react';
import styled from 'styled-components';

const ShoppingCartButtonStyled = styled.button`
  height: 338.51px;
  padding: 54.66px;
  font-size: 1.4em;
  font-weight: bold;
  color: yellowgreen;
  display: flex;
`;

const ShoppingCartButton = (props) => {
  return (
    <ShoppingCartButtonStyled><i className="hb hb-shopping-cart-solid::before"></i> Add to Cart</ShoppingCartButtonStyled>
  );
};

export default ShoppingCartButton;


