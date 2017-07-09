/*
  An input textarea component, used in our create topic page.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledTextarea = styled.textarea`
  font-family: Arial, sans-serif;
  border-radius: 4px;
  padding: 0.25rem;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
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

class InputTextarea extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <StyledTextarea
          cols={this.props.cols}
          rows={this.props.rows}
          ref="input"
          type="text"
          onBlur={this.props.onBlur}
          onChange={e => this.props.onChange(e.target.value)}
          value={this.props.value}
        />
        {this.props.error
          ? <ErrorMessage>
              {this.props.error}
            </ErrorMessage>
          : false}
      </div>
    );
  }
}

InputTextarea.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  value: PropTypes.string,
  onBlur: PropTypes.func,
};

InputTextarea.defaultProps = {
  rows: 20,
  cols: 80,
};

export default InputTextarea;
