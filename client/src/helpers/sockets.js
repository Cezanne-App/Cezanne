import store from '../store/index';
import addBid from '../actions/creators/addBid';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient(window.location.href);

let subscriptions = 0;
export const subscribeToBids = () => {
  subscriptions++;
  if (subscriptions === 1) {
    socket.on('bid', bid => {
      let state = store.getState();
      let artwork = state.bidModal.artwork;
      if (bid.artworkId === artwork._id) {
        store.dispatch(addBid(bid));
      }
    });
  }
};

export const sendBid = bid => {
  socket.emit('bid', bid);
};