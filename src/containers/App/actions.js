import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from './constants';

const DEFAULT_POSTS = [
  {
    topic: 'Topic 1',
    votes: 0,
  },
  {
    topic: 'Topic 2',
    votes: 0,
  },
  {
    topic: 'Topic 3',
    votes: 0,
  },
  {
    topic: 'Topic 4',
    votes: 0,
  },
];

export function loadPosts() {
  return {
    type: LOAD_POSTS,
  };
}

// In a real-world app, we use fetch() here to retrieve actual data from a server.
// For this sample app, we use a timeout to mimic the async behaviour of network calls.
export function fetchPosts() {
  return dispatch => {
    dispatch(loadPosts());
    setTimeout(() => {
      dispatch(postsLoaded(DEFAULT_POSTS));
    }, 500);
  };
}

export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}

// We prepare an action in case there is an error in fetching the data.
// Again, in our sample app, there is no error since there's always
export function loadPostsError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error,
  };
}
