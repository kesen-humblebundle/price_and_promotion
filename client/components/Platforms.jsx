import React from 'react';
import styled from 'styled-components';

// const PlatformsStyled = styled.div`
// background: 1b1e1b;
// text-align: left;
// padding-left: 4px;
// height: 25px;
// `;

const PlatformsStyled = styled.div`
  height: 24px;
  float: left;
`;

const Platforms = (props) => {
  const platforms = props.platforms.platforms;
  const os = props.platforms.os;
  let combined = platforms.concat(os);
  console.log('array of platforms and os: ', combined);
  const platformsArray = combined.map((platform, index) => {
    console.log('platform and index via map: ', platform, index)
    return <img src={platform[1]} alt="platform icon" width="21px" key={index}></img>;
  });
  return (
    <PlatformsStyled>
      {platformsArray}
    </PlatformsStyled>
  );
};

export default Platforms;




