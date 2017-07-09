/*
  A Banner component used in Header. This is not combined with Header, so that we
  can move Header to Container if we want to add more things to Header.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  background-color: ${theme.colors.blue};
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  color: ${theme.colors.grey};
  width: 100%;
  height: 250px;
  position: relative;
`;

const TitleText = styled.span`
  background-color: transparent;
  font-family: Overwatch;
  font-style: italic;
  text-decoration: none;
  text-shadow: 0 1px 1px;
  color: ${theme.colors.grey};
  font-size: 6rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 2rem;
`;

const ColoredTitleInnerText = styled.span`color: ${theme.colors.darkergrey};`;

class Banner extends Component {
  render() {
    return (
      <Wrapper image="/banner.jpg">
        <TitleText>
          REDDIT
          <ColoredTitleInnerText>CLONE</ColoredTitleInnerText>
        </TitleText>

        {this.props.children}
      </Wrapper>
    );
  }
}

export default Banner;
