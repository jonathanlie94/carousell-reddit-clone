/*
  We can consider moving Header into containers in case we want to make
  a more complicated interaction on the Header that requires connect to our reducers.
*/

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Header;
