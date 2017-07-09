import { INCREMENT_PAGE, DECREMENT_PAGE } from './constants';
import { requestFetchTopics } from 'containers/App/actions';

export function incrementPageLocal() {
  return {
    type: INCREMENT_PAGE,
  };
}

export function incrementPage() {
  return (dispatch, getState) => {
    const page = getState().get('homePage').get('meta').get('page') + 1;
    dispatch(incrementPageLocal());
    dispatch(requestFetchTopics(page));
  };
}

export function decrementPageLocal() {
  return {
    type: DECREMENT_PAGE,
  };
}

export function decrementPage() {
  return (dispatch, getState) => {
    const page = getState().get('homePage').get('meta').get('page') - 1;
    dispatch(decrementPageLocal());
    dispatch(requestFetchTopics(page));
  };
}
