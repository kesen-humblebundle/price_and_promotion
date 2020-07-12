import React from 'react';
import styled from 'styled-components';

const WishlistButtonStyled = styled.button`
  height: 338.51px;
  width: 54.66px;
  background-color: #2e2f2d;
  border-radius: 2px;
  color: #a3a3a3;
  cursor: pointer;
  display: block;
  font-size: 0.8em;
  font-weight: bold;
  line-height: 1.25em;
  padding: .35em 0;
  position: relative;
  text-align: center;
  text-shadow: 0 2px 0 rgba(0,0,0,0.2);
  text-transform: uppercase;
  transition: background-color .2s, color .2s;
  width: 100%;
`;

const WishlistButton = (props) => {
  return (

    <WishlistButtonStyled>Add to Wishlist</WishlistButtonStyled>

  );
};

export default WishlistButton;