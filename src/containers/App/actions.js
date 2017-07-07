import {
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from './constants';
import { getDataList, getData, upvote, downvote } from 'utils/sampleDataManager';
import { fromJS } from 'immutable';

const FETCH_DELAY = 500;
const VOTE_DELAY = 100;

export function loadTopics() {
  return {
    type: LOAD_TOPICS,
  };
}

// In a real-world app, we use fetch() here to retrieve actual data from a server.
// For this sample app, we use a timeout to mimic the async behaviour of network calls.
export function fetchTopics(page, per_page) {
  return dispatch => {
    dispatch(loadTopics());
    setTimeout(() => {
      const data = getDataList(page, per_page);
      dispatch(topicsLoaded(fromJS(data)));
    }, FETCH_DELAY);
  };
}

export function topicsLoaded(data) {
  return {
    type: LOAD_TOPICS_SUCCESS,
    topics: data.get('topics'),
    meta: data.get('meta'),
  };
}

// We prepare an action in case there is an error in fetching the data.
// Again, in our sample app, there is no error since there's always
export function loadTopicsError(error) {
  return {
    type: LOAD_TOPICS_ERROR,
    error,
  };
}

export function loadTopic() {
  return {
    type: LOAD_TOPIC,
  };
}

export function fetchTopic(id) {
  return (dispatch, getState) => {
    dispatch(loadTopic());
    setTimeout(() => {
      const data = getData(id);
      if (data) {
        dispatch(topicLoaded(fromJS(data)));
      } else {
        dispatch(loadTopicError('Topic not Found!'));
      }
    }, FETCH_DELAY);
  };
}

export function topicLoaded(topic) {
  return {
    type: LOAD_TOPIC_SUCCESS,
    topic,
  };
}

export function loadTopicError(error) {
  return {
    type: LOAD_TOPIC_ERROR,
    error,
  };
}


export function upvoteTopic(topic) {
  return {
    type: UPVOTE_TOPIC,
    topic,
  };
}

export function requestUpvoteTopic(id) {
  return (dispatch, getState) => {
    setTimeout(() => {
      const data = upvote(id);
      if (data) {
        dispatch(upvoteTopic(fromJS(data)));
      }
    }, VOTE_DELAY);
  };
}

export function downvoteTopic(topic) {
  return {
    type: DOWNVOTE_TOPIC,
    topic,
  };
}

export function requestDownvoteTopic(id) {
  return (dispatch, getState) => {
    setTimeout(() => {
      const data = downvote(id);
      if (data) {
        dispatch(downvoteTopic(fromJS(data)));
      }
    }, VOTE_DELAY);
  };
}
