import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledInput = styled.input`
  font-family: Arial, sans-serif;
  border-radius: 4px;
  padding: 0.5rem 0.25rem;
  margin: 0;
  width: 300px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.error ? theme.colors.yellow : theme.colors.grey};
  background-color: ${theme.colors.white};
  outline-color: ${theme.colors.blue};
`;

class InputText extends PureComponent {
  render() {
    return (
      <StyledInput
        className={this.props.className}
        type="text"
        onChange={e => this.props.onChange(e.target.value)}
        value={this.props.value}
      />
    );
  }
}

InputText.propTypes = {
  className: PropTypes.string,
};

export default InputText;
