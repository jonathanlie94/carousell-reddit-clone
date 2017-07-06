import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${theme.colors.grey};
  overflow: hidden;
`;

class ListView extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default ListView;
