import { fromJS, Map } from 'immutable';

import {
  SET_FORM,
  RESET_FORM,
  CREATE_TOPIC_SUCCESS,
  CREATE_TOPIC_ERROR,
  CREATE_TOPIC,
} from './constants';

const initialState = fromJS({
  form: {
    title: '',
    description: '',
  },
  loading: false,
  error: {},
});

function submitPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM:
      return state.set('form', state.get('form').merge(Map(action.form)));
    case RESET_FORM:
      return state.set('form', initialState.get('form'));
    case CREATE_TOPIC:
      return state.set('loading', true);
    case CREATE_TOPIC_SUCCESS:
      return state.set('loading', false);
    case CREATE_TOPIC_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default submitPageReducer;
