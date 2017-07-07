import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledButton = styled.button`
  height: auto;
  text-align: center;
  font-family: Overwatch;
  font-size: ${theme.fontSizes.regularL};
  outline-width: 0;
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
  &:focus:not([disabled]),
  :hover:not([disabled]) {
    opacity: .625;
  }
  &:disabled {
    opacity: .25;
  }
  transition: .1s ease;
`;

class Button extends Component {
  render() {
    return (
      <StyledButton
        className={this.props.className}
        color={this.props.color}
        disabled={this.props.disabled}
        backgroundColor={this.props.backgroundColor}
        onClick={this.props.disabled ? null : this.props.onClick || null}
      >
        <span>
          {this.props.children}
        </span>
      </StyledButton>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: theme.colors.white,
  backgroundColor: theme.colors.blue,
};

export default Button;
