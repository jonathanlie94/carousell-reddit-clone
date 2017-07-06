import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  background-color: ${theme.colors.grey};
  display: flex;
  flex-direction: row;
`;

class RootContainer extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default RootContainer;
