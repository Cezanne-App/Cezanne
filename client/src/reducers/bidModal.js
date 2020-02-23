const initialStore = {
  artwork: {},
  bids: { values: [], dates: [] }
};

export default (state = initialStore, action) => {
  switch (action.type) {
    case 'SET_ARTWORK': {
      return { ...state, artwork: action.payload }
    }
    case 'SET_BIDS': {
      return { ...state, bids: action.payload }
    }
    case 'ADD_BID': {
      let bid = action.payload;
      let newBids = {
        values: state.bids.values.slice(),
        dates: state.bids.dates.slice()
      }
      newBids.values.push(bid.value);
      newBids.dates.push(bid.date);
      return { ...state, bids: newBids }
    }
    default:
      return state;
  }
};
