import React from 'react';
import styled from 'styled-components';

const PlatformsStyled = styled.div`
  width: 338.91px;
  height: 22.31px;
`;

const IconStyled = styled.div`
  color: white;
  width: 18px;
  height: 17.95px;
  margin: 0;
  padding: 0;
`;

const Platforms = (props) => {
  return (
    <PlatformsStyled>
      <IconStyled>{props.platform}</IconStyled>
    </PlatformsStyled>
  );
};

export default Platforms;




