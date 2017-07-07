import React, { Component } from 'react';

class InputText extends Component {
  render() {
    return (
      <input
        type="text"
        onChange={e => this.props.onChange(e.target.value)}
        value={this.props.value}
      />
    );
  }
}

export default InputText;
