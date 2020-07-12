import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ImageStyled = styled.div`
  background-color:  lightblue;
  height: 212.31px;
  width:100%;

  `;

const PriceImage = (props) => {
  return (
    <ImageStyled>
      {props.image}
    </ImageStyled>
  );
};

export default PriceImage;