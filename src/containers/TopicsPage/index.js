import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';

const Wrapper = styled.div`
  color: ${theme.colors.blue}
`;


class TopicsPage extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.match.params.id}
      </Wrapper>
    );
  }
}

export default TopicsPage;
