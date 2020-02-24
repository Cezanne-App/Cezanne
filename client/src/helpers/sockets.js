import socketIOClient from 'socket.io-client';
import addBid from '../actions/creators/addBid';
import setHighestBid from '../actions/creators/setHighestBid';
import store from '../store/index';

const socket = socketIOClient(window.location.href);

let subscriptions = 0;
export const subscribeToBids = () => {
  subscriptions += 1;
  if (subscriptions === 1) {
    socket.on('bid', bid => {
      const state = store.getState();
      const { artwork } = state.bidModal;
      if (bid.artworkId === artwork._id) {
        store.dispatch(setHighestBid(bid.value));
        store.dispatch(addBid(bid));
      }
    });
  }
};

export const sendBid = bid => {
  socket.emit('bid', bid);
};
