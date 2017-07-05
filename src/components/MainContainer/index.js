import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  background-color: ${theme.colors.grey};
  border-radius: 4px;
  border: 1px solid ${theme.colors.grey};
  overflow-y: hidden;
  color: ${theme.colors.black};
  width: 100%;
  height: auto;
  min-height: 768px;
  margin: 12px 0 12px 12px;
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
