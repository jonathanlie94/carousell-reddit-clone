import React, { PureComponent } from 'react';
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

const Time = styled.div`
  margin-top: ${theme.fontSizes.small};
  font-size: ${theme.fontSizes.small};
`;

class TopicListContent extends PureComponent {
  render() {
    return (
      <Wrapper>
        <StyledLink to={`/topics/${this.props.topic.get('id')}`}>
          {this.props.topic.get('title')}
        </StyledLink>
        <Time>
          <FormattedRelative value={this.props.topic.get('created_at')} />
        </Time>
      </Wrapper>
    );
  }
}

TopicListContent.propTypes = {
  topic: PropTypes.instanceOf(Map),
};

export default TopicListContent;
