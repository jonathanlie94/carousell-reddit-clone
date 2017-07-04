import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'ui';

const StyledDiv = styled.div`
  color: ${theme.colors.accent};
  padding: 2rem;
`;

class TopicItem extends Component {
  render() {
    return (
      <StyledDiv>
        {this.props.match.params.topicId}
      </StyledDiv>
    );
  }
}

TopicItem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};

export default TopicItem;
