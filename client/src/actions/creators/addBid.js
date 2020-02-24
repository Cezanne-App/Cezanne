import { ADD_BID } from '../index';

const addBid = bid => ({
  type: ADD_BID,
  payload: bid
});

export default addBid;
