import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledDiv = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.accent};
  display: flex;
`;

class Banner extends Component {
  render() {
    return <StyledDiv>Banner</StyledDiv>;
  }
}

export default Banner;
