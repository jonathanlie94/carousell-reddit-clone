import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopics } from 'containers/App/actions';
import { withRouter } from 'react-router-dom';
import { List } from 'immutable';
import SideSubmit from 'containers/SideSubmit';
import styled from 'styled-components';
import {
  ListItem,
  ScrollToTopOnMount,
  TopicListContent,
  ListView,
  RootContainer,
  MainContainer,
  SideContainer,
  VoteWidget,
} from 'components';
import {
  requestUpvoteTopic,
  requestDownvoteTopic,
} from 'containers/App/actions';

const StyledListItem = styled(ListItem)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <RootContainer>
        <ScrollToTopOnMount />
        <MainContainer>
          <ListView>
            {this.props.topics.map((topic, key) => {
              return (
                <StyledListItem key={`topic-${key}`}>
                  <VoteWidget
                    count={topic.get('votes')}
                    onUpvote={() => this.props.upvoteTopic(topic.get('id'))}
                    onDownvote={() => this.props.downvoteTopic(topic.get('id'))}
                  />
                  <TopicListContent topic={topic} />
                </StyledListItem>
              );
            })}
          </ListView>
        </MainContainer>

        <SideContainer>
          <SideSubmit />
        </SideContainer>
      </RootContainer>
    );
  }
}

HomePage.propTypes = {
  topics: PropTypes.instanceOf(List),
};

const mapStateToProps = state => {
  const topicIds = state.get('homePage').get('topicIds');
  return {
    topics: topicIds.map(id => state.get('app').get('topics').get(`${id}`)),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopics: () => dispatch(fetchTopics()),
    upvoteTopic: id => dispatch(requestUpvoteTopic(id)),
    downvoteTopic: id => dispatch(requestDownvoteTopic(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
