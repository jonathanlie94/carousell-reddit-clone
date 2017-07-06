import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledButton = styled.button`
  height: auto;
  text-align: center;
  font-family: Overwatch;
  font-size: ${theme.fontSizes.regularL};
  padding-left: ${theme.margins.small};
  padding-right: ${theme.margins.small};
  color: ${props => props.color};
  border-color: transparent;
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
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
