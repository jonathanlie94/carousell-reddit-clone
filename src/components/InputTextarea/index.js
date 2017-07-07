import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'ui';

const StyledTextarea = styled.textarea`
  font-family: Arial, sans-serif;
  border-radius: 4px;
  padding: 0.5rem 0.25rem;
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

class InputTextarea extends PureComponent {
  render() {
    return (
      <StyledTextarea
        className={this.props.className}
        cols={this.props.cols}
        rows={this.props.rows}
        type="text"
        onChange={e => this.props.onChange(e.target.value)}
        value={this.props.value}
      />
    );
  }
}

InputTextarea.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  value: PropTypes.string,
};

InputTextarea.defaultProps = {
  rows: 20,
  cols: 80,
}

export default InputTextarea;
