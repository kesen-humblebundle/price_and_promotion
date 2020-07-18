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
 
`;

//what i get back from Chris is array of string inside of props.platforms
const Platforms = (props) => {
  const platforms = props.platforms;
  const platformsArray = platforms.map((platform, index) => {
    console.log('platform and index via map: ', platform, index)
    return <img src={platform} alt="platform icon" width="21px" key={index}></img>;
  });
  return (
    <PlatformsStyled>
      {platformsArray}
    </PlatformsStyled>
  );
};

export default Platforms;




