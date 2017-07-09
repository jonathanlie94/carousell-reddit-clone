import {
  RESET_FORM,
  SET_FORM,
  CREATE_TOPIC_SUCCESS,
  CREATE_TOPIC,
  CREATE_TOPIC_ERROR,
} from './constants';
import { create } from 'utils/sampleDataManager';
import { fromJS } from 'immutable';

const SUBMIT_DELAY = 200;

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}

export function setForm(form) {
  return {
    type: SET_FORM,
    form,
  };
}

export function createTopic() {
  return {
    type: CREATE_TOPIC,
  };
}

export function requestCreateTopic(form) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(createTopic());
      const form = getState().get('submitPage').get('form').toJS();
      setTimeout(() => {
        const errorMessage = create(form);
        if (!errorMessage) {
          dispatch(topicCreated());
          resolve();
        } else {
          dispatch(topicCreatedError(fromJS(errorMessage)));
          reject();
        }
      }, SUBMIT_DELAY);
    });
  };
}

export function topicCreated() {
  return {
    type: CREATE_TOPIC_SUCCESS,
  };
}

export function topicCreatedError(error) {
  return {
    type: CREATE_TOPIC_ERROR,
    error,
  };
}
