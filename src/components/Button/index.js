import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledButton = styled.button`
  height: auto;
  text-align: center;
  font-family: Overwatch;
  font-size: ${theme.fontSizes.regularL};
  /* The paddings here are different from right and left, because we are using a
    a special font which makes the formatting unequal between sides
  */
  padding-left: ${theme.margins.small};
  padding-right: ${theme.margins.regular};
  color: ${props => props.color};
  border-color: transparent;
  border-radius: 4px;
  transform: skewX(-.25rad);
  background-color: ${props => props.backgroundColor};
  & > span {
    transform: skewX(.25rad);
    display: block;
  }
`;

class Button extends Component {
  render() {
    return (
      <StyledButton
        className={this.props.className}
        color={this.props.color}
        backgroundColor={this.props.backgroundColor}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Button;
