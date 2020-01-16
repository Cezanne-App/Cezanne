const models = require('../models/index.js');

module.exports = {
  artWorks: {
    get: (req, res) => {
      models.artWorks.find()
      .then(data => res.json(data))
      .catch(e => {
        res.sendStatus(404);
        console.error(e);
      })
    },
    post: (req, res) => {
      models.artWorks.add()
      res.sendStatus(201);
    }
  }
};