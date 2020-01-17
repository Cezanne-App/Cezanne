const db = require('../../db/index.js');

module.exports = {
  artWorks: {
    find: () => {
      return db.Artwork.find()
    },
    add: (post) => {
      return db.Artwork.save(post);
    },
    updateHighestBid: (id, bid) => {
      return db.Artwork.update({_id: id}, {highestBid: bid});
    }
  }
}