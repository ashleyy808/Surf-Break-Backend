// const express = require("express");
// const router = express.Router();
// const Favorite = require('../models/favorite');
// const jwt = require('jsonwebtoken');

// module.exports = {
//     showFavorite,
//     createFavorite,
//     delete: deleteFavorite
// };



// // Show Destination's Favorites
// function showFavorite( req, res) {
//     // favorite
//     // .find({ destinationId: req.params.id })
//     // .sort({ createdAt: -1 })
//     // .then(favorites => res.json(favorites))
//     // .catch(err => res.status(400).json(err))
// }


// // Create a Favorite Destination
// function createFavorite(req, res) {
//     // const newFavorite = new favorite({
//     //     creatorId: req.user.id,
//     //     destinationId: req.params.id,
//     //   });
//     //   newFavorite.save()
//     //     .then(favorite => res.json(favorite))
//     //     .catch(err => res.status(400).json(err))
//     }

// // Delete a Favorite Destination
// function deleteFavorite(req, res) {
//     // Favorite
//     //   .findById(req.params.favoriteId)
//     //   .then(favorite => {
//     //     if(!favorite) {
//     //       return res.status(404).json({ error: "Can't find that favorite destination" })
//     //     }
//     //     Favorite.deleteOne(favorite)
//     //       .then(favorite => res.json({ msg: "favorite deleted" }))
//     //       .catch(err => console.log(err))
//     //   });
//   }