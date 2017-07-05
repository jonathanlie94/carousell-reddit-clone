import {
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
} from './constants';
import sampleData from './sampleData';

export function loadTopics() {
  return {
    type: LOAD_TOPICS,
  };
}

// In a real-world app, we use fetch() here to retrieve actual data from a server.
// For this sample app, we use a timeout to mimic the async behaviour of network calls.
export function fetchTopics() {
  return dispatch => {
    dispatch(loadTopics());
    setTimeout(() => {
      dispatch(topicsLoaded(sampleData));
    }, 500);
  };
}

export function topicsLoaded(topics) {
  return {
    type: LOAD_TOPICS_SUCCESS,
    topics,
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
