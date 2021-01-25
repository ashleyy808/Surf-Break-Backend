//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  destinationId: {
    type: Schema.Types.ObjectId,
    ref: 'Destination',
    required: true
  },
  quality: {
    type: Number,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', reviewSchema);
// require mongoose
const mongoose = require('mongoose');

// create a shortcut variable for the Schema class
const Schema = mongoose.Schema;

// create the reviewSchema

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, default: 5}
}, { timestamps: true });


module.exports = mongoose.model('ReviewSchema', reviewSchema);