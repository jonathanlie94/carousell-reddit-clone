import * as actions from '../actions';
import * as constants from '../constants';
import { fromJS } from 'immutable';
import * as sampleDataManager from 'utils/sampleDataManager';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to load topics', () => {
    const expectedAction = {
      type: constants.LOAD_TOPICS,
    };
    expect(actions.loadTopics()).toEqual(expectedAction);
  });

  it('creates LOAD_TOPICS_SUCCESS after fetching is done', () => {
    const data = fromJS(sampleDataManager.getDataList(1, 20));
    const expectedActions = [
      { type: constants.LOAD_TOPICS },
      {
        type: constants.LOAD_TOPICS_SUCCESS,
        topics: data.get('topics'),
        meta: data.get('meta'),
        orderedIds: data.get('orderedIds'),
      },
    ];
    const store = mockStore({ topics: {} });

    return store.dispatch(actions.requestFetchTopics()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to load a topic', () => {
    const expectedAction = {
      type: constants.LOAD_TOPIC,
    };
    expect(actions.loadTopic()).toEqual(expectedAction);
  });

  it('creates LOAD_TOPIC_SUCCESS after fetching is done', () => {
    const data = fromJS(sampleDataManager.getData(1));
    const expectedActions = [
      { type: constants.LOAD_TOPIC },
      {
        type: constants.LOAD_TOPIC_SUCCESS,
        topic: data,
      },
    ];
    const store = mockStore({ topics: {} });

    return store.dispatch(actions.requestFetchTopic(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates UPVOTE_TOPIC after upvote', () => {
    const data = fromJS(sampleDataManager.upvote(1));
    const expectedActions = [
      {
        type: constants.UPVOTE_TOPIC,
        topic: data,
      },
    ];
    // Downvote it first to return the value back before upvoting it back again,
    // as the sampleDataManager updates the in-memory data immediately.
    sampleDataManager.downvote(1);

    const store = mockStore({ topics: {} });

    return store.dispatch(actions.requestUpvoteTopic(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates DOWNVOTE_TOPIC after downvote', () => {
    const data = fromJS(sampleDataManager.downvote(1));
    const expectedActions = [
      {
        type: constants.DOWNVOTE_TOPIC,
        topic: data,
      },
    ];
    // Upvote it first to return the value back before downvoting it back again,
    // as the sampleDataManager updates the in-memory data immediately.
    sampleDataManager.upvote(1);
    const store = mockStore({ topics: {} });

    return store.dispatch(actions.requestDownvoteTopic(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
