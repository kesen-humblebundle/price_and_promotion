import React from 'react';
import styled from 'styled-components';

const PriceStyled = styled.div`
  height: 21.54px;
  width: 338.51px;
  padding: 10px;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
`;

const Price = (props) => {
  console.log('Price props: ', props)
  return (
    <PriceStyled>{props.price}</PriceStyled>
  );
};

export default Price;









