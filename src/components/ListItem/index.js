import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.grey};
  min-height: 4rem;
  padding: 16px;
`;

class ListItem extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>
        {this.props.children}
      </Wrapper>
    );
  }
}

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ListItem;
