/*
  An input text component, currently not used anywhere in the app.
  It was developed previously for the title input, however Textarea is
  more approriate for that length.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledInput = styled.input`
  font-family: Arial, sans-serif;
  border-radius: 4px;
  padding: 0.5rem 0.25rem;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.error ? theme.colors.yellow : theme.colors.grey};
  background-color: ${theme.colors.white};
  outline-color: ${theme.colors.blue};
  outline-width: 4px;
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.red};
  margin-top: ${theme.margins.small};
`;

class InputText extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <StyledInput
          className={this.props.className}
          ref="input"
          type="text"
          onBlur={this.props.onBlur}
          onChange={e => this.props.onChange(e.target.value)}
          value={this.props.value}
        />
        {this.props.error
          ? <ErrorMessage ref="error">
              {this.props.error}
            </ErrorMessage>
          : false}
      </div>
    );
  }
}

InputText.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
};

export default InputText;
