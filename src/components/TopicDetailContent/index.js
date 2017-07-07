import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { theme } from 'ui';
import TopicTime from '../TopicTime';

const Wrapper = styled.div`margin-left: ${theme.margins.small};`;

const Title = styled.div`
  font-style: normal;
  text-decoration: none;
  color: ${theme.colors.blue};
`;

const StyledTopicTime = styled(TopicTime)`
  margin-top: 1rem;
`;

const Description = styled.div`
  margin: ${theme.margins.regular} 0;
  font-style: ${theme.fontSizes.regular};
  color: ${theme.colors.darkergrey};
`;

class TopicDetailContent extends Component {
  render() {
    return this.props.topic
      ? <Wrapper>
          <Title>
            {this.props.topic && this.props.topic.get('title')}
          </Title>
          <Description>
            {this.props.topic && this.props.topic.get('description')}
          </Description>
          {this.props.topic && this.props.topic.get('created_at')
            ? <StyledTopicTime value={this.props.topic.get('created_at')} />
            : false}
        </Wrapper>
      : false;
  }
}

TopicDetailContent.propTypes = {
  topic: PropTypes.instanceOf(Map),
};

export default TopicDetailContent;
