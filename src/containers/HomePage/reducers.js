import { fromJS, List } from 'immutable';

import { INCREMENT_PAGE, DECREMENT_PAGE, RESET_PAGE } from './constants';

import { LOAD_TOPICS_SUCCESS } from 'containers/App/constants';

const initialState = fromJS({
  meta: {
    page: 1,
    per_page: 20,
    total: 0,
  },
  topicIds: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PAGE:
      return state
        .mergeIn(['meta'], state.get('meta').set('page', 1))
        .set('topicIds', List([]));
    case INCREMENT_PAGE:
      return state
        .mergeIn(
          ['meta'],
          state.get('meta').set('page', state.get('meta').get('page') + 1)
        )
        .set('topicIds', List([]));
    case DECREMENT_PAGE:
      return state
        .mergeIn(
          ['meta'],
          state.get('meta').set('page', state.get('meta').get('page') - 1)
        )
        .set('topicIds', List([]));
    case LOAD_TOPICS_SUCCESS:
      return state
        .set(
          'topicIds',
          action.topics
            .map(t => t.get('id'))
            .sortBy((item, key) => -Number(key))
            .toList()
        )
        .set('meta', action.meta);
    default:
      return state;
  }
}

export default homePageReducer;
