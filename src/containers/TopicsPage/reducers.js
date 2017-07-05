import { fromJS } from 'immutable';

import { SELECT_TOPIC } from './constants';

const initialState = fromJS({
  selectedTopicId: false,
});

function topicsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TOPIC:
      return state.set('selectedTopicId', action.id);
    default:
      return state;
  }
}

export default topicsPageReducer;
