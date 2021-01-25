const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  qualityAndConsistency: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  crowd: {
    type: String
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model('Review', reviewSchema);



