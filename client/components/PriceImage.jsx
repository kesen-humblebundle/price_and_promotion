import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ImageStyled = styled.div`
  background-color:  lightblue;
  height: 212.31px;
  width:100%;
  `;
const BackgroundImage = styled.div`
  height: 212.31px;
  width:100%;
  `;

const PriceImage = (props) => {
  console.log("PriceImage props: ", props)
  return (
    <ImageStyled>
      <BackgroundImage>
        <img src={props.image} />
      </BackgroundImage>
    </ImageStyled>
  );
};

export default PriceImage;