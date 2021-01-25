const express = require("express");
const router = express.Router();
// const Review = require("../models/review");


module.exports = {
    create,
    show,
    delete: deleteReview,
    updateReview,
}; 


//Functions

// Create Review
async function create(req, res) {
    // try {
    //   await newReview.save({});
    //   res.status(200).send({ message: "Review Created" });
    // } catch (error) {
    //   res.status(500).send(error);
    // }
  };


// Show Review
function show(req, res) {
    //  Review.find({})
    // .sort({ createdAt: -1 })
    // .then(reviews => res.json(reviews))
    // .catch(err => res.status(400).json(err));
}


// Delete Review
async function deleteReview(req, res) {
    // try {
    //     await review.findOneAndDelete({});
    //     res.status(200).send({ message: "Review deleted successfully" });
    //   } catch (error) {
    //     res.status(500).send(error);
    //   }
    };

// Update Review
async function updateReview(req, res) {
    // const { qualityAndConsistency, difficulty, crowd, comment  } = {};
    // try {
    //   await review.findOneAndUpdate(
    //     { qualityAndConsistency, difficulty, crowd, comment }
    //   );
    //   res.status(200).send({ message: "Review update successfully" });
    // } catch (error) {
    //   res.status(500).send(error);
    // }
  };



