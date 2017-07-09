/*
  A component that contains content for a topic with less detail, to be used in
  /topics for list items. We can argue that the component is not pure here, because it uses some other
  component. We can expand the file structure further to components, containers, and modules.
*/

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';
import { theme } from 'ui';
import TopicTime from '../TopicTime';

const Wrapper = styled.div`margin-left: ${theme.margins.small};`;

const StyledLink = styled(Link)`
  font-style: normal;
  text-decoration: none;
  color: ${theme.colors.blue};
`;

class TopicListContent extends PureComponent {
  render() {
    return (
      <Wrapper className={this.props.className}>
        <StyledLink to={`/topics/${this.props.topic.get('id')}`}>
          {this.props.topic.get('title')}
        </StyledLink>
        <TopicTime value={this.props.topic.get('created_at')} />
      </Wrapper>
    );
  }
}

TopicListContent.propTypes = {
  className: PropTypes.string,
  topic: PropTypes.instanceOf(Map),
};

export default TopicListContent;
