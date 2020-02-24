import { SET_HIGHEST_BID } from '../index';

const setHighestBid = bid => ({
  type: SET_HIGHEST_BID,
  payload: bid,
});

export default setHighestBid;
