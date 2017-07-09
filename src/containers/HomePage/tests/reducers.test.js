import reducer from '../reducers';
import * as constants from '../constants';
import * as appConstants from 'containers/App/constants';
import { fromJS } from 'immutable';

describe('submitPageReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        meta: {
          page: 1,
          per_page: 20,
          total: 0,
        },
        topicIds: [],
      })
    );
  });

  it('should handle RESET_PAGE', () => {
    expect(
      reducer(
        fromJS({
          meta: {
            page: 2,
            per_page: 20,
            total: 0,
          },
          topicIds: [1,2,3],
        }),
        {
          type: constants.RESET_PAGE,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          meta: {
            page: 1,
            per_page: 20,
            total: 0,
          },
          topicIds: [],
        }),
        {}
      )
    );
  });

  it('should handle INCREMENT_PAGE', () => {
    expect(
      reducer(
        fromJS({
          meta: {
            page: 1,
            per_page: 20,
            total: 0,
          },
          topicIds: [1,2,3],
        }),
        {
          type: constants.INCREMENT_PAGE,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          meta: {
            page: 2,
            per_page: 20,
            total: 0,
          },
          topicIds: [],
        }),
        {}
      )
    );
  });

  it('should handle DECREMENT_PAGE', () => {
    expect(
      reducer(
        fromJS({
          meta: {
            page: 2,
            per_page: 20,
            total: 0,
          },
          topicIds: [1,2,3],
        }),
        {
          type: constants.DECREMENT_PAGE,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          meta: {
            page: 1,
            per_page: 20,
            total: 0,
          },
          topicIds: [],
        }),
        {}
      )
    );
  });

  it('should handle LOAD_TOPICS_SUCCESS', () => {
    expect(
      reducer(
        fromJS({
          meta: {
            page: 1,
            per_page: 20,
            total: 0,
          },
          topicIds: [],
        }),
        {
          type: appConstants.LOAD_TOPICS_SUCCESS,
          orderedIds: fromJS([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
          meta: fromJS({
            page: 2,
            per_page: 20,
            total: 40,
          }),
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          meta: {
            page: 2,
            per_page: 20,
            total: 40,
          },
          topicIds: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        }),
        {}
      )
    );
  });
});
