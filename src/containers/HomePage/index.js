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
            {this.props.topics.map((val, key) => {
              return (
                <StyledListItem key={`topic-${key}`}>
                  <VoteWidget count={val.get('votes')} />
                  <TopicListContent topic={val} />
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
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
