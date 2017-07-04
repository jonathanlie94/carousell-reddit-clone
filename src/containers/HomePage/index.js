import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { fetchPosts } from 'containers/App/actions';
import messages from './messages';
import { injectIntl, FormattedMessage } from 'react-intl';

class HomePage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <FormattedMessage
          { ...messages.homeText}
          values={{
            name: (
              <b>
                Eric
              </b>
            ),
            unreadCount: 11,
          }}
        />
        {this.props.posts.map(post =>
          <div>
            {post.topic}
          </div>
        )}
      </div>
    );
  }
}

HomePage.propTypes = {
  posts: PropTypes.instanceOf(List),
};

const mapStateToProps = state => {
  return {
    posts: state.get('app').get('posts'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomePage));
