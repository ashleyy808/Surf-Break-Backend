const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surfSpotSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coordinates: {
    type: Array,
    required: true
  },
  description: {
    type: String
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('SurfSpot', surfSpotSchema);
