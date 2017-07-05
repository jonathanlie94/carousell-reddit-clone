import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  background-color: ${theme.colors.grey};
  color: ${theme.colors.black};
  width: 100%;
  height: auto;
  min-height: 768px;
  padding: 12px 0 12px 12px;
`;

class MainContainer extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default MainContainer;
