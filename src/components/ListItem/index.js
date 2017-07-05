import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.grey};
  min-height: 4rem;
  padding: 12px;
`;

class ListItem extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default ListItem;
