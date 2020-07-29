import React from 'react';
import styled from 'styled-components';

const PlatformsStyled = styled.div`
  height: 24px;
  float: left;
`;

const Platforms = (props) => {
  const platforms = props.platforms.platforms;
  const os = props.platforms.os;

  const platformsArray = platforms.map((platform, index) => {
    console.log('platform data being accessed: ', platform[index])
    return <img src={platform[1]} alt="platform icon" width="21px" key={index}></img>;
  });

  const osArray = os.map((os, index) => {
    console.log('os data being accessed: ', os[index])
    return <img src={os[1]} alt="platform icon" width="21px" key={index}></img>;
  });

  return (
    <PlatformsStyled>
      {platformsArray}{osArray}
    </PlatformsStyled>
  );
  
};

export default Platforms;




