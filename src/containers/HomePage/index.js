import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { fetchPosts } from 'containers/App/actions';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
