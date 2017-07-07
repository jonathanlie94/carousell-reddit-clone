import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopic } from 'containers/App/actions';
import { withRouter } from 'react-router-dom';
import {
  ScrollToTopOnMount,
  ListItem,
  TopicDetailContent,
  ListView,
  RootContainer,
  MainContainer,
  SideContainer,
} from 'components';
import Helmet from 'react-helmet';
import SideSubmit from 'containers/SideSubmit';
import { selectTopic } from './actions';

class TopicsPage extends Component {
  componentDidMount() {
    this.props.fetchTopic(Number(this.props.match.params.id));
    this.props.selectTopic(Number(this.props.match.params.id));
  }

  render() {
    return (
      <RootContainer>
        <ScrollToTopOnMount />
        {this.props.topic && this.props.topic.get('title')
          ? <Helmet>
              <title>{`${this.props.topic &&
                this.props.topic.get('title')}`}</title>
            </Helmet>
          : false}

        <MainContainer>
          <ListView>
            <ListItem>
              <TopicDetailContent topic={this.props.topic} />
            </ListItem>
          </ListView>
        </MainContainer>

        <SideContainer>
          <SideSubmit />
        </SideContainer>
      </RootContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    topic: state
      .get('app')
      .get('topics')
      .get(state.get('topicsPage').get('selectedTopicId')),
  };
}

const mapDispatchToProps = dispatch => ({
  selectTopic: id => dispatch(selectTopic(id)),
  fetchTopic: id => dispatch(fetchTopic(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsPage)
);
