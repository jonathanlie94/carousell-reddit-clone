import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  background-color: ${theme.colors.grey};
  color: ${theme.colors.black};
  min-width: 320px;
  height: auto;
  padding: 12px 12px 12px 12px;
`;

class SideContainer extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default SideContainer;
