import React from 'react';
import styled from 'styled-components';

const PromotionButton = styled.button`
background: black;
color:white;
height: 31.97px;
border-radius: 2px;
width: 95%;
margin: 0 auto;
margin-bottom: 2px;
display: inline-block;
border: none;
`;

const Span = styled.span`
  color: #d0d5e1;
  font-size: .95em;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(63,68,80,0.35);
`;

const SpanD = styled.span`
color: #AEFF14;
font-size: .95em;
`;

const SpanO = styled.span `
  color: orange;
  font-size: .95em;
`;

//NOTE this is a HREF. use spans
const Promotion = (props) => {
  return (
    <PromotionButton>
      <Span>Save an additional <SpanD>{`$${props.promotion}`}</SpanD> with <SpanO>Humble Choice</SpanO></Span>
    </PromotionButton>
  );
};

export default Promotion;
