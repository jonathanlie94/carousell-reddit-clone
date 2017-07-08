/*
  A container used to render components on the right side of the screen.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';
import PropTypes from 'prop-types';

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
      <Wrapper className={this.props.className}>
        {this.props.children}
      </Wrapper>
    );
  }
}

SideContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SideContainer;
