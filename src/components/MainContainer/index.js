/*
  A container used to render components on the left side of the screen.
  Used by pages on containers.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: ${theme.colors.grey};
  color: ${theme.colors.black};
  height: auto;
  flex: 1;
  min-height: 80rem;
  padding: 12px 12px 96px 12px;
  position: relative;
`;

class MainContainer extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>
        {this.props.children}
      </Wrapper>
    );
  }
}

MainContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default MainContainer;
