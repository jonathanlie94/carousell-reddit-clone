/*
  Rendered when the route matches nothing in our router.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`color: ${theme.colors.blue};`;

class PageNotFound extends Component {
  render() {
    return <Wrapper>Page Not Found</Wrapper>;
  }
}

export default PageNotFound;
