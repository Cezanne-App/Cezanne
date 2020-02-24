import { SET_BIDS } from '../index';

const setBids = bids => ({
  type: SET_BIDS,
  payload: bids
});

export default setBids;