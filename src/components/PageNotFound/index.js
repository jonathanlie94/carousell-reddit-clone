import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  color: ${theme.colors.blue};
`;

class PageNotFound extends Component {
  render() {
    return (
      <Wrapper>
        Page Not Found
      </Wrapper>
    );
  }
};

export default PageNotFound;
