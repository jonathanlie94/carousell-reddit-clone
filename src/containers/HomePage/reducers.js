import { fromJS } from 'immutable';

import { INCREMENT_PAGE, DECREMENT_PAGE } from './constants';

import { LOAD_TOPICS_SUCCESS } from 'containers/App/constants';

const initialState = fromJS({
  page: 1,
  per_page: 20,
  total: 0,
  topicIds: [],
});

function homePageReducer(state = initialState, action) {
  let currentPage = state.get('page');
  switch (action.type) {
    case INCREMENT_PAGE:
      return state.set('page', state.get('page') + 1);
    case DECREMENT_PAGE:
      return currentPage > 1 ? state.set('page', state.get('page') - 1) : state;
    case LOAD_TOPICS_SUCCESS:
      return state
        .set('topicIds',
          action.topics
          .map(t => t.get('id'))
          .sortBy((item, key) => -Number(key))
          .toList())
        .set('total', action.meta.get('total'));
    default:
      return state;
  }
}

export default homePageReducer;
