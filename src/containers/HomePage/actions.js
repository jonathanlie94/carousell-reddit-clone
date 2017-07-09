import { INCREMENT_PAGE, DECREMENT_PAGE, RESET_PAGE } from './constants';
import { requestFetchTopics } from 'containers/App/actions';

export function incrementPageLocal() {
  return {
    type: INCREMENT_PAGE,
  };
}

export function incrementPage() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const page = getState().get('homePage').get('meta').get('page') + 1;
      dispatch(incrementPageLocal());
      dispatch(requestFetchTopics(page))
        .then(() => resolve())
        .catch(() => reject());
    });
  };
}

export function decrementPageLocal() {
  return {
    type: DECREMENT_PAGE,
  };
}

export function decrementPage() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const page = getState().get('homePage').get('meta').get('page') - 1;
      dispatch(decrementPageLocal());
      dispatch(requestFetchTopics(page))
        .then(() => resolve())
        .catch(() => reject());
    });
  };
}

export function resetPage() {
  return {
    type: RESET_PAGE,
  };
}
