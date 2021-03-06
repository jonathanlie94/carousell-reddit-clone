import { fromJS } from 'immutable';

import {
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from './constants';

/**
  The global state of our app. It store map of previously loaded topics, a loading flag, and error flag.
  Loading and error are not used in this app right now, but it can be used to display spinners or
  global error messages such as to warn users if their network is disconnected.

  You might notice that the topics are stored here, but not all actions related to topic are stored here.

  For example, create topic actions are in submitPageReducer, but load topic actions are in appReducer.
  I made this decision as I think that there might be more pages that use load topic actions,
  but only the submitPage can create topics.
**/
const initialState = fromJS({
  loading: false,
  error: false,
  topics: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPICS:
    case LOAD_TOPIC:
      return state.set('loading', true).set('error', false);
    case LOAD_TOPICS_SUCCESS:
      return state
        .set('topics', action.topics.merge(state.get('topics')))
        .set('loading', false)
        .set('error', false);
    case UPVOTE_TOPIC:
    case DOWNVOTE_TOPIC:
    case LOAD_TOPIC_SUCCESS:
      return state.mergeIn(
        ['topics'],
        state.get('topics').mergeIn([`${action.topic.get('id')}`], action.topic)
      );
    case LOAD_TOPIC_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
