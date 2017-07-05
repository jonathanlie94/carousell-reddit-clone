import {
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
} from './constants';
import { getDataList, getData } from 'utils/sampleDataManager';

const FAKE_TIMEOUT = 500;

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
      dispatch(topicsLoaded(data));
    }, FAKE_TIMEOUT);
  };
}

export function topicsLoaded(data) {
  return {
    type: LOAD_TOPICS_SUCCESS,
    topics: data.topics,
    meta: data.meta,
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
        dispatch(topicLoaded(data));
      } else {
        dispatch(loadTopicError('Topic not Found!'));
      }
    }, 500);
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
