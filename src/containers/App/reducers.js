import { fromJS } from 'immutable';

import { LOAD_TOPICS, LOAD_TOPICS_SUCCESS, LOAD_TOPICS_ERROR } from './constants';

// The initial state of the App.
// Think of the states here as a global state.
// In this case, things such as loading and storing the posts are processed here.
const initialState = fromJS({
  loading: false,
  error: false,
  topics: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPICS:
      return state.set('loading', true).set('error', false);
    case LOAD_TOPICS_SUCCESS:
      return state
        .set('topics', action.topics)
        .set('loading', false)
        .set('error', false);
    case LOAD_TOPICS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
