const models = require('../models/index.js');

module.exports = {
  artWorks: {
    get: (req, res) => {

    },
    post: (req, res) => {
      models.artWorks.add()
      res.sendStatus(201);
    }
  }
}