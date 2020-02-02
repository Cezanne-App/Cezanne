const models = require("../../db/models/index.js");

module.exports = {
  artworks: {
    get: (req, res) => {
      models.artWorks
        .find()
        .then(data => res.json(data))
        .catch(e => {
          res.sendStatus(404);
          console.error(e);
        });
    },
    post: (req, res) => {
      models.artWorks
        .add(req.body.post)
        .then(() => res.sendStatus(201))
        .catch(e => {
          res.sendStatus(500);
          console.error(e);
        });
    },
    put: (req, res) => {
      const id = req.params.id;
      const bid = req.body.bid;
      if (typeof bid !== "number" || bid <= 0) {
        res.sendStatus(404);
      } else {
        models.artWorks
          .updateHighestBid(id, bid)
          .then(() => res.sendStatus(200))
          .catch(e => {
            res.sendStatus(500);
            console.error(e);
          });
      }
    }
  }
};
