import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopics } from 'containers/App/actions';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Link, withRouter } from 'react-router-dom';
import { List } from 'immutable';
import moment from 'moment';
import messages from './messages';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    const topics = this.props.topics;
    console.log(topics);

    return (
      <div>
        <FormattedMessage
          {...messages.homeText}
          values={{
            name: <b>Eric</b>,
            unreadCount: 11,
          }}
        />
        {this.props.topics.map(topic => {
          return (
            <Link
              key={`topic-${topic.get('id')}`}
              to={`/topics/${topic.get('id')}`}
            >
              {topic.get('title')}
              {moment(topic.get('created_at')).fromNow()}
            </Link>
          );
        })}
      </div>
    );
  }
}

HomePage.propTypes = {
  intl: PropTypes.object.isRequired,
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
  connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomePage))
);
