const db = require('../../db/index.js');

module.exports = {
  artWorks: {
    find: () => {
      return db.Artwork.find();
    },
    add: post => {
      return db.Artwork.create(post);
    },
    updateHighestBid: (id, bid) => {
      return db.Artwork.updateOne({ _id: id }, { highestBid: bid });
    },
  },
  bids: {
    getAll: artworkId => {
      return db.Bid.find({ artworkId }, 'value date');
    },
    save: bid => {
      return db.Bid.create(bid);
    },
  },
};
