import reducer from '../reducers';
import * as constants from '../constants';
import { fromJS } from 'immutable';
import * as sampleDataManager from 'utils/sampleDataManager';

describe('appReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        loading: false,
        error: false,
        topics: {},
      })
    );
  });

  it('should handle LOAD_TOPICS', () => {
    expect(
      reducer(
        fromJS({
          loading: false,
          error: false,
        }),
        {
          type: constants.LOAD_TOPICS,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          loading: true,
          error: false,
        }),
        {
          type: constants.LOAD_TOPICS,
        }
      )
    );
  });

  it('should handle LOAD_TOPIC', () => {
    expect(
      reducer(
        fromJS({
          loading: false,
          error: false,
        }),
        {
          type: constants.LOAD_TOPICS,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          loading: true,
          error: false,
        }),
        {}
      )
    );
  });

  it('should handle LOAD_TOPICS_SUCCESS', () => {
    const data = sampleDataManager.getDataList(1, 20);

    expect(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: {},
        }),
        {
          type: constants.LOAD_TOPICS_SUCCESS,
          topics: fromJS(data),
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: data,
        }),
        {}
      )
    );
  });

  it('should handle UPVOTE_TOPIC', () => {
    const data = fromJS(sampleDataManager.upvote(1));

    expect(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: {},
        }),
        {
          type: constants.UPVOTE_TOPIC,
          topic: data,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: {
            1: data,
          },
        }),
        {}
      )
    );
  });

  it('should handle DOWNVOTE_TOPIC', () => {
    const data = fromJS(sampleDataManager.downvote(1));

    expect(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: {},
        }),
        {
          type: constants.DOWNVOTE_TOPIC,
          topic: data,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: {
            1: data,
          },
        }),
        {}
      )
    );
  });

  it('should handle LOAD_TOPIC_SUCCESS', () => {
    const data = fromJS(sampleDataManager.getData(1));

    expect(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: {},
        }),
        {
          type: constants.LOAD_TOPIC_SUCCESS,
          topic: data,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: {
            1: data,
          },
        }),
        {}
      )
    );
  });

  it('should handle LOAD_TOPIC_ERROR', () => {
    const data = sampleDataManager.getData(21);

    expect(
      reducer(
        fromJS({
          loading: false,
          error: false,
          topics: {},
        }),
        {
          type: constants.LOAD_TOPIC_ERROR,
          error: data,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          loading: false,
          error: data,
          topics: {},
        }),
        {}
      )
    );
  });
});
