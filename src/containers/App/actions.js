import {
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from './constants';
import {
  getDataList,
  getData,
  upvote,
  downvote,
} from 'utils/sampleDataManager';
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
export function requestFetchTopics(page, per_page) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(loadTopics());
      setTimeout(() => {
        const data = getDataList(page, per_page);
        dispatch(topicsLoaded(fromJS(data)));
        resolve();
      }, FETCH_DELAY);
    });
  };
}

export function topicsLoaded(data) {
  return {
    type: LOAD_TOPICS_SUCCESS,
    topics: data.get('topics'),
    meta: data.get('meta'),
  };
}

export function loadTopic() {
  return {
    type: LOAD_TOPIC,
  };
}

export function requestFetchTopic(id) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(loadTopic());
      setTimeout(() => {
        const data = getData(id);
        if (data) {
          dispatch(topicLoaded(fromJS(data)));
          resolve();
        } else {
          dispatch(loadTopicError('Topic not Found!'));
        }
      }, FETCH_DELAY);
    });
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = upvote(id);
        if (data) {
          dispatch(upvoteTopic(fromJS(data)));
          resolve();
        }
      }, VOTE_DELAY);
    });
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = downvote(id);
        if (data) {
          dispatch(downvoteTopic(fromJS(data)));
          resolve();
        }
      }, VOTE_DELAY);
    });
  };
}
