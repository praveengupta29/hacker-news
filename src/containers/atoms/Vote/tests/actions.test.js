import { VOTE_FEED } from '../constants';

import { voteFeed } from '../actions';

describe('VoteFeed Actions', () => {
  const data = {
    objectId: '567383',
    voted: true,
  };

  it('should return vote feed type action', () => {
    const expectedResult = {
      type: VOTE_FEED,
      data,
    };

    expect(voteFeed(data)).toStrictEqual(expectedResult);
  });
});
