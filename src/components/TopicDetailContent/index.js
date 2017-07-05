import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';
import { theme } from 'ui';
import { FormattedRelative } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-style: normal;
  text-decoration: none;
  color: ${theme.colors.blue};
`;

const Description = styled.div`
  margin-top: ${theme.fontSizes.regular};
  font-style: ${theme.fontSizes.regular};
  color: ${theme.colors.darkergrey};
`;

const Time = styled.div`
  margin-top: ${theme.fontSizes.small};
  font-size: ${theme.fontSizes.small};
`;

class TopicDetailContent extends Component {
  render() {
    return this.props.topic
      ? <Wrapper>
          <StyledLink to={`/topics/${this.props.topic.get('id')}`}>
            {this.props.topic && this.props.topic.get('title')}
          </StyledLink>
          <Description>
            {this.props.topic && this.props.topic.get('description')}
          </Description>
          {this.props.topic && this.props.topic.get('created_at')
            ? <Time>
                <FormattedRelative value={this.props.topic.get('created_at')} />
              </Time>
            : false}
        </Wrapper>
      : false;
  }
}

TopicDetailContent.propTypes = {
  topic: PropTypes.instanceOf(Map),
};

export default TopicDetailContent;
