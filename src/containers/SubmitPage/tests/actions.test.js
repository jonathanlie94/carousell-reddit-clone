import * as actions from '../actions';
import * as constants from '../constants';
import { fromJS } from 'immutable';
import * as sampleDataManager from 'utils/sampleDataManager';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitPageActions', () => {
  it('should create an action to reset form', () => {
    const expectedAction = {
      type: constants.RESET_FORM,
    };
    expect(actions.resetForm()).toEqual(expectedAction);
  });

  it('should create an action to set form', () => {
    const expectedAction = {
      type: constants.SET_FORM,
      form: fromJS({
        title: 'Title 1',
      }),
    };
    expect(
      actions.setForm(
        fromJS({
          title: 'Title 1',
        })
      )
    ).toEqual(expectedAction);
  });

  it('creates CREATE_TOPIC_SUCCESS after requesting create is done', () => {
    const expectedActions = [
      { type: constants.CREATE_TOPIC },
      { type: constants.CREATE_TOPIC_SUCCESS },
    ];
    const store = mockStore(
      fromJS({
        submitPage: {
          form: {
            title: 'title 1',
            description: '',
          },
          loading: false,
          error: {},
        },
      })
    );

    return store.dispatch(actions.requestCreateTopic()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates CREATE_TOPIC_ERROR if somehow client-side validation passes through', () => {
    const errorMessage = fromJS(
      sampleDataManager.create({
        title: '',
      })
    );
    const expectedActions = [
      { type: constants.CREATE_TOPIC },
      { type: constants.CREATE_TOPIC_ERROR, error: errorMessage },
    ];
    const store = mockStore(
      fromJS({
        submitPage: {
          form: {
            title: '',
            description: '',
          },
          loading: false,
          error: {},
        },
      })
    );

    return store.dispatch(actions.requestCreateTopic()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
