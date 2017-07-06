import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${theme.colors.grey};
  overflow: hidden;
`;

class ListView extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>
        {this.props.children}
      </Wrapper>
    );
  }
}

ListView.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ListView;
