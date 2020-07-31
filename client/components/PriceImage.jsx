import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const PriceBackgroundImage = styled.div`
  height: 212.31px;
  `;

const PriceImage = (props) => {

  return (
    <PriceBackgroundImage className='pricePromo-image'>
      <img className='pricePromo-img-cover' src={props.image} width="100%" height="212.31px"></img>
    </PriceBackgroundImage>
  );
  
};

export default PriceImage;