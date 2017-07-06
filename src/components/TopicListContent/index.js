import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';
import { theme } from 'ui';
import TopicTime from '../TopicTime';

const Wrapper = styled.div``;

const StyledLink = styled(Link)`
  font-style: normal;
  text-decoration: none;
  color: ${theme.colors.blue};
`;

class TopicListContent extends PureComponent {
  render() {
    return (
      <Wrapper>
        <StyledLink to={`/topics/${this.props.topic.get('id')}`}>
          {this.props.topic.get('title')}
        </StyledLink>
        <TopicTime value={this.props.topic.get('created_at')} />
      </Wrapper>
    );
  }
}

TopicListContent.propTypes = {
  topic: PropTypes.instanceOf(Map),
};

export default TopicListContent;
