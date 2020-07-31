import React from 'react';
import styled from 'styled-components';

const PriceStyled = styled.div`
  display: block;
  background: #1b1e1b;
  text-align: right;
  padding-right: 15px;
  margin-bottom: 5px;
  height: 42.66px;
  font-size: 2.4em;
  font-weight: bold;
  color: white;

`;

const Price = (props) => {

  return (
    <PriceStyled className='pricePromo-price'>{`$ ${props.price}`}</PriceStyled>
  );
  
};

export default Price;









