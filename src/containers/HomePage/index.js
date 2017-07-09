import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestFetchTopics } from 'containers/App/actions';
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
  Paginator,
} from 'components';
import {
  requestUpvoteTopic,
  requestDownvoteTopic,
} from 'containers/App/actions';
import { incrementPage, decrementPage } from './actions';

const StyledListItem = styled(ListItem)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StyledPaginator = styled(Paginator)`
  position: absolute;
  bottom: -3.75rem;
`;

class HomePage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.meta !== this.props.meta) {
      window.scrollTo(0, 0);
    }
  }

  componentWillMount() {
    this.props.requestFetchTopics();
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

          <StyledPaginator
            onPreviousPage={this.props.decrementPage}
            onNextPage={this.props.incrementPage}
            meta={this.props.meta}
          />
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
    meta: state.get('homePage').get('meta'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestFetchTopics: () => dispatch(requestFetchTopics()),
    upvoteTopic: id => dispatch(requestUpvoteTopic(id)),
    downvoteTopic: id => dispatch(requestDownvoteTopic(id)),
    incrementPage: () => dispatch(incrementPage()),
    decrementPage: () => dispatch(decrementPage()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
