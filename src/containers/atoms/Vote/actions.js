import { VOTE_FEED } from './constants';

export const voteFeed = data => ({
  type: VOTE_FEED,
  data,
});
