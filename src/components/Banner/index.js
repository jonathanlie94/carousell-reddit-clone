import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'ui';

const Wrapper = styled.div`
  background-color: ${theme.colors.blue};
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  color: ${theme.colors.grey};
  width: 100%;
  height: 250px;
`;

class Banner extends Component {
  render() {
    return (
      <Link to="/">
        <Wrapper image="/banner.jpg">
          {this.props.children}
        </Wrapper>
      </Link>
    );
  }
}

export default Banner;
