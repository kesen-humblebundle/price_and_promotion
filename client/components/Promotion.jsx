import React from 'react';
import styled from 'styled-components';

const PromotionButton = styled.button`
background: black;
color:white;
height: 31.97px;
border-radius: 3px;
width: 338.5px;
margin: 0 auto;
margin-bottom: 2px;
display: inline-block;
border: none;
`;

const SpanText = styled.span`
  color: #d0d5e1;
  font-size: .95em;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(63,68,80,0.35);
`;

const SpanDiscount = styled.span`
color: #AEFF14;
font-size: .95em;
`;

const SpanOrange = styled.span`
  color: orange;
  font-size: .95em;
`;

//NOTE this is a HREF. use spans
const Promotion = (props) => {
  return (
    <PromotionButton className='pricePromo-promotion-discount'>
      <SpanText className='pricePromo-promotion-discount-span-text'>Save an additional <SpanDiscount className='pricePromo-promotion-discount-span-discount' >{`$${props.promotion}`}</SpanDiscount> with <SpanOrange className='pricePromo-promotion-discount-span-orange'>Humble Choice</SpanOrange></SpanText>
    </PromotionButton>
  );
};

export default Promotion;
