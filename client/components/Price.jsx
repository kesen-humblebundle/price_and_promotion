import React from 'react';
import styled from 'styled-components';

const PriceStyled = styled.div`
  background: #1b1e1b;
  text-align: right;
  height: 42.66px;
  width: 100%;
  font-size: 2.4em;
  font-weight: bold;
  color: white;
  margin-bottom: 50px;
`;

const Price = (props) => {
  console.log('Price props: ', props)
  return (
    <PriceStyled className='pricePromo-price'>{`$ ${props.price}`}</PriceStyled>
  );
};

export default Price;









