import React from 'react';
import styled from 'styled-components';

const PlatformsStyled = styled.div`
  height: 24px;
  width: 100%
  float: left;
  padding-top: 10px;
  padding-left: 15px;
  text-align: left;
`;

const Platforms = (props) => {
  
  const platforms = props.platforms.platforms;
  const os = props.platforms.os;

  const platformsArray = platforms.map((platform, index) => {
    return <img className='pricePromo-img-platforms-platform' src={platform[1]} alt="platform icon" width="21px" key={index}></img>;
  });

  const osArray = os.map((os, index) => {
    return <img className='pricePromo-img-platforms-os' src={os[1]} alt="platform icon" width="21px" key={index}></img>;
  });

  return (
    <PlatformsStyled className='pricePromo-platforms'>
      {platformsArray}{osArray}
    </PlatformsStyled>
  );

};

export default Platforms;




