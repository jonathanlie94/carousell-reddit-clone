import * as actions from '../actions';
import * as constants from '../constants';

describe('topicsPageActions', () => {
  it('should create an action to select topic', () => {
    const expectedAction = {
      type: constants.SELECT_TOPIC,
      id: 12,
    };
    expect(actions.selectTopic(12)).toEqual(expectedAction);
  });
});
