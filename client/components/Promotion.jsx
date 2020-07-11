import React from 'react';
import styled from 'styled-components';

const PromotionButton = styled.button`
  height: 21.54px;
  padding: 10px;
  color: white;
  background: black;
  border-radius: 2px;
  color: #d0d5e1;
  display: block;
  font-size: 0.75em;
  font-weight: bold;
  padding: .67em;
  text-align: center;
  text-decoration: none;
  text-shadow: 0 2px 0 rgba(63,68,80,0.35);
  text-transform: uppercase;
`;
//NOTE this is a HREF. use spans
const Promotion = (props) => {
  return (
    <PromotionButton>
      <a href="/subscription" className="rewards-monthly-section" target="_blank">
        Save an additional  <span className="green">{props.promotion}</span> with <span className="orange">Humble Choice</span>
      </a>
    </PromotionButton>
  );
};

export default Promotion;
