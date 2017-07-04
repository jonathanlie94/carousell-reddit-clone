import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledDiv = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.accent};
  display: flex;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 200px;
`;

class Banner extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledImg src="logo.svg" />
      </StyledDiv>
    );
  }
}

export default Banner;
