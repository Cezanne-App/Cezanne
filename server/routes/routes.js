const router= require('express').Router();
const controllers = require('../controllers/index.js');

router.get('/artworks', controllers.artWorks.get);
router.post('/artworks', controllers.artWorks.post);

module.exports = router;