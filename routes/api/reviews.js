const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/reviews');

//Routes
router.get("/review", reviewsCtrl.show);

//Only admin
router.post("/review",  reviewsCtrl.create);
router.put("/update/:id", reviewsCtrl.updateReview);
// router.delete("/delete/:id", reviewsCtrl.delete);

//Export the router object
module.exports = router;