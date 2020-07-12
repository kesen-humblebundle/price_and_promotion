import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ImageStyled = styled.div`
  background-color:  lightblue;
  color: white;
  width: 370.5px;
  height: 212.31px;

  `;

const PriceImage = (props) => {
  return (
    <ImageStyled>
      {props.image}
    </ImageStyled>
  );
};

export default PriceImage;