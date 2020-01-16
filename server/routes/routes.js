const router= require('express').Router();
const controllers = require('../controllers/index.js');

router.get('/test', (req, res) => {
  res.sendStatus(201);
})

router.get('/artworks', controllers.artWorks.get);
router.post('/artworks', controllers.artWorks.post);

module.exports = router;