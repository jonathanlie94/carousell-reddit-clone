import * as actions from '../actions';
import * as constants from '../constants';
import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('homePageActions', () => {
  it('should create an action to increment page locally', () => {
    const expectedAction = {
      type: constants.INCREMENT_PAGE,
    };
    expect(actions.incrementPageLocal()).toEqual(expectedAction);
  });

  it('should create an action to decrement page locally', () => {
    const expectedAction = {
      type: constants.DECREMENT_PAGE,
    };
    expect(actions.decrementPageLocal()).toEqual(expectedAction);
  });

  it('should create an action to reset page', () => {
    const expectedAction = {
      type: constants.RESET_PAGE,
    };
    expect(actions.resetPage()).toEqual(expectedAction);
  });

  it('should create INCREMENT_PAGE upon incrementing page', () => {
    const expectedAction = { type: constants.INCREMENT_PAGE };
    const store = mockStore(
      fromJS({
        homePage: {
          meta: {
            page: 1,
            per_page: 20,
            total: 0,
          },
          topicIds: [],
        },
      })
    );

    return store.dispatch(actions.incrementPage()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });

  it('should create DECREMENT_PAGE upon decrementing page', () => {
    const expectedAction = { type: constants.DECREMENT_PAGE };
    const store = mockStore(
      fromJS({
        homePage: {
          meta: {
            page: 1,
            per_page: 20,
            total: 0,
          },
          topicIds: [],
        },
      })
    );

    return store.dispatch(actions.decrementPage()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });
});
