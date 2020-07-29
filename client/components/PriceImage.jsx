import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// const PriceImageStyled = styled.div`
//   background-color:  lightblue;
//   height: 212.31px;
//   width:100%;
//   `;
const PriceBackgroundImage = styled.div`
  height: 212.31px;
  width:100%;
  `;

const PriceImage = (props) => {
  console.log("PriceImage props: ", props)
  return (
    // <PriceImageStyled>
      <PriceBackgroundImage>
        <img src={props.image} width="100%" height="212.31px"></img>
      </PriceBackgroundImage>
    // </PriceImageStyled>
  );
};

export default PriceImage;