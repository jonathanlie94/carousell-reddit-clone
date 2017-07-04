import { fromJS } from 'immutable';

import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from './constants';

// The initial state of the App.
// Think of the states here as a global state.
// In this case, things such as loading and storing the posts are processed here.
const initialState = fromJS({
  loading: false,
  error: false,
  posts: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state.set('loading', true).set('error', false);
    case LOAD_POSTS_SUCCESS:
      return state
        .set('posts', action.posts)
        .set('loading', false)
        .set('error', false);
    case LOAD_POSTS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
