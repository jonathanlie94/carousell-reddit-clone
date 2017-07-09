import reducer from '../reducers';
import * as constants from '../constants';
import { fromJS } from 'immutable';

describe('submitPageReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        form: {
          title: '',
          description: '',
        },
        loading: false,
        error: {},
      })
    );
  });

  it('should handle SET_FORM', () => {
    expect(
      reducer(
        fromJS({
          form: {
            title: '',
            description: '',
          },
          loading: false,
          error: {},
        }),
        {
          type: constants.SET_FORM,
          form: fromJS({
            title: '123',
          }),
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          form: {
            title: '123',
            description: '',
          },
          loading: false,
          error: {},
        }),
        {}
      )
    );
  });

  it('should handle RESET_FORM', () => {
    expect(
      reducer(
        fromJS({
          form: {
            title: '123',
            description: '',
          },
          loading: false,
          error: {},
        }),
        {
          type: constants.RESET_FORM,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          form: {
            title: '',
            description: '',
          },
          loading: false,
          error: {},
        }),
        {}
      )
    );
  });

  it('should handle CREATE_TOPIC', () => {
    expect(
      reducer(
        fromJS({
          form: {
            title: '',
            description: '',
          },
          loading: false,
          error: {},
        }),
        {
          type: constants.CREATE_TOPIC,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          form: {
            title: '',
            description: '',
          },
          loading: true,
          error: {},
        }),
        {}
      )
    );
  });

  it('should handle CREATE_TOPIC_SUCCESS', () => {
    expect(
      reducer(
        fromJS({
          form: {
            title: '',
            description: '',
          },
          loading: true,
          error: {},
        }),
        {
          type: constants.CREATE_TOPIC_SUCCESS,
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          form: {
            title: '',
            description: '',
          },
          loading: false,
          error: {},
        }),
        {}
      )
    );
  });

  it('should handle CREATE_TOPIC_ERROR', () => {
    expect(
      reducer(
        fromJS({
          form: {
            title: '',
            description: '',
          },
          loading: true,
          error: {},
        }),
        {
          type: constants.CREATE_TOPIC_ERROR,
          error: fromJS({
            title: 'Too long bro',
          }),
        }
      )
    ).toEqual(
      reducer(
        fromJS({
          form: {
            title: '',
            description: '',
          },
          loading: false,
          error: {
            title: 'Too long bro',
          },
        }),
        {}
      )
    );
  });
});
