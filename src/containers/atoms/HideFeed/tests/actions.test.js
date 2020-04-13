import { HIDE_FEED } from '../constants';

import { hideFeed } from '../actions';

describe('HideFeed Actions', () => {
  it('should return hide feed type action', () => {
    const data = '7376828';
    const expectedResult = {
      type: HIDE_FEED,
      data,
    };

    expect(hideFeed(data)).toStrictEqual(expectedResult);
  });
});
