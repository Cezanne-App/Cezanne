const db = require('../../db/index.js');

module.exports = {
  artWorks: {
    find: () => {
      return db.Artwork.find();
    },
    add: (post) => {
      return db.Artwork.create(post);
    },
    updateHighestBid: (id, bid) => {
      return db.Artwork.update({ _id: id }, { highestBid: bid });
    }
  },
  bids: {
    getAll: (artworkId) => {
      return db.Bid.find({ artworkId: artworkId })
    }
  }
};