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
`;
//NOTE this is a HREF. use spans
const Promotion = (props) => {
  return (
    <PromotionButton>
      <a href="/subscription" className="rewards-monthly-section" target="_blank" >
        Save an additional  <span className="green">{`$${props.promotion}`}</span> with <span className="orange">Humble Choice</span>
      </a>
    </PromotionButton>
  );
};

export default Promotion;
