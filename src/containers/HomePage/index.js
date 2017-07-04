import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopics } from 'containers/App/actions';
import { injectIntl, FormattedMessage } from 'react-intl';
import moment from 'moment';
import messages from './messages';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <div>
        <FormattedMessage
          {...messages.homeText}
          values={{
            name: <b>Eric</b>,
            unreadCount: 11,
          }}
        />
        {this.props.topics.map(topic =>
          <div key={`topic-${topic.title}`}>
            {topic.title}
            {moment(topic.created_at).fromNow()}
          </div>
        )}
      </div>
    );
  }
}

HomePage.propTypes = {
  intl: PropTypes.object.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

const mapStateToProps = state => {
  return {
    topics: state.get('app').get('topics'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopics: () => dispatch(fetchTopics()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  injectIntl(HomePage)
);
