const router = require('express').Router();
const controllers = require('../controllers/index.js');

// Artworks
router.get('/artworks', controllers.artworks.get);
router.post('/artworks', controllers.artworks.post);
router.put('/artworks/:id', controllers.artworks.put);

// Routes
router.get('/bids/:artworkId', controllers.bids.get);

module.exports = router;