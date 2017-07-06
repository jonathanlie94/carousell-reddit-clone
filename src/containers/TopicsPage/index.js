import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTopic } from 'containers/App/actions';
import { withRouter } from 'react-router-dom';
import { ScrollToTopOnMount, ListItem, TopicDetailContent } from 'components';
import Helmet from 'react-helmet';
import { selectTopic } from './actions';
import { Map } from 'immutable';

const Wrapper = styled.div``;

class TopicsPage extends Component {
  componentDidMount() {
    this.props.fetchTopic(Number(this.props.match.params.id));
    this.props.selectTopic(Number(this.props.match.params.id));
  }

  render() {
    return (
      <Wrapper>
        <ScrollToTopOnMount />
        {this.props.topic && this.props.topic.get('title')
          ? <Helmet>
              <title>{`${this.props.topic &&
                this.props.topic.get('title')}`}</title>
            </Helmet>
          : false}
        <ListItem>
          <TopicDetailContent topic={this.props.topic} />
        </ListItem>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    topic: Map(
      state
        .get('app')
        .get('topics')
        .get(state.get('topicsPage').get('selectedTopicId'))
    ),
  };
}

const mapDispatchToProps = dispatch => ({
  selectTopic: id => dispatch(selectTopic(id)),
  fetchTopic: id => dispatch(fetchTopic(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsPage)
);
