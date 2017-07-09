/*
  A container used to render components one level below root.
  This component is typically used above MainContainer and SideContainer.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';
import PropTypes from 'prop-types';
import { media } from 'ui/helpers';

const Wrapper = styled.div`
  background-color: ${theme.colors.grey};
  display: flex;
  flex-direction: row;
  position: relative;
  ${media.mobile`
    flex-direction: column;
  `};
  ${media.tablet`
    flex-direction: column;
  `};
`;

class RootContainer extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>
        {this.props.children}
      </Wrapper>
    );
  }
}

RootContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default RootContainer;
