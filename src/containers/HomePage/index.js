import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopics } from 'containers/App/actions';
import { withRouter } from 'react-router-dom';
import { List } from 'immutable';
import {
  ListItem,
  ScrollToTopOnMount,
  TopicListContent,
  ListView,
  RootContainer,
  MainContainer,
  SideContainer,
} from 'components';

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
            {this.props.topics.map(topic => {
              return (
                <ListItem key={`topic-${topic.get('id')}`}>
                  <TopicListContent topic={topic} />
                </ListItem>
              );
            })}
          </ListView>
        </MainContainer>

        <SideContainer>
          <ListView>
            <ListItem />
          </ListView>
        </SideContainer>
      </RootContainer>
    );
  }
}

HomePage.propTypes = {
  topics: PropTypes.instanceOf(List),
};

const mapStateToProps = state => {
  return {
    topics: List(
      state.get('homePage').get('topicIds').map(id => {
        return state.get('app').get('topics').get(id);
      })
    ),
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
