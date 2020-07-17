import React from 'react';
import styled from 'styled-components';

const PlatformsStyled = styled.div`
background: 1b1e1b;
text-align: left;
padding-left: 4px;
height: 25px;
`;

const IconStyled = styled.div`
color: white;
height: 24px;
`;

const Platforms = (props) => {
  console.log('Platform props is an array:', props)
  return (
    <PlatformsStyled>
      <IconStyled>{props.platform}</IconStyled>
    </PlatformsStyled>
  );
};

export default Platforms;




