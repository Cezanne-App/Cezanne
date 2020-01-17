const router= require('express').Router();
const controllers = require('../controllers/index.js');

// Artworks
router.get('/artworks', controllers.artWorks.get);
router.post('/artworks', controllers.artWorks.post);
router.put('/artworks/:id', controllers.artWorks.put);

module.exports = router;