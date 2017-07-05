import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';
import { connect } from 'react-redux';
import { fetchTopic } from 'containers/App/actions';
import { withRouter } from 'react-router-dom';
import { ScrollToTopOnMount } from 'components';
import { selectTopic } from './actions';

const Wrapper = styled.div`color: ${theme.colors.blue};`;

class TopicsPage extends Component {
  componentWillMount() {
    this.props.selectTopic(this.props.match.params.id);
    this.props.fetchTopic(this.props.match.params.id);
  }

  render() {
    return (
      <Wrapper>
        <ScrollToTopOnMount />
        {`${this.props.topic && this.props.topic.get('title')}`}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    topic: state
      .get('app')
      .get('topics')
      .get(state.get('topicsPage').get('selectedTopicId')),
  };
};

const mapDispatchToProps = dispatch => ({
  selectTopic: id => dispatch(selectTopic(id)),
  fetchTopic: id => dispatch(fetchTopic(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsPage)
);
