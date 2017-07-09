import reducer from '../reducers';
import * as constants from '../constants';
import { fromJS } from 'immutable';

describe('topicsPageReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        selectedTopicId: false,
      })
    );
  });

  it('should handle SELECT_TOPIC', () => {
    expect(
      reducer(
        fromJS({
          selectedTopicId: false,
        }),
        {
          type: constants.SELECT_TOPIC,
          id: 12,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          selectedTopicId: 12,
        }),
        {}
      )
    );
  });
});
