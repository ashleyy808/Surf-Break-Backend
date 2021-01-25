const express = require('express');
const router = express.Router();
const surfSpotsCtrl = require('../../controllers/surfSpots');

// routes for surfing destinations
router.get('/', surfSpotsCtrl.index);
router.post('/', surfSpotsCtrl.create);
router.get('/:id',surfSpotsCtrl.show); 
router.delete('/:id', surfSpotsCtrl.delete);
router.put('/:id', surfSpotsCtrl.update);

// routes for favorite surfing destinations
router.get('/:id/favorites', surfSpotsCtrl.show) 
router.post('/:id/favorites', surfSpotsCtrl.create);
router.delete('/:id/favorites/:favoriteId', surfSpotsCtrl.delete); 


//Export the router object
module.exports = router;