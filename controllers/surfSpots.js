const express = require("express");
const router = express.Router();
const SurfSpot = require('../models/surfSpot');
// const Review = require('../models/review');
const Favorite = require('../models/favorite');
const jwt = require('jsonwebtoken');
const passport = require('passport');
// const reviews = require('./reviews');


module.exports = {
    index,
    create,
    show,
    delete: deleteSurfSpot,
    update,
    showFavorite,
    createFavorite,
    delete: deleteFavorite
};


// Functions for Surfing Destinations

// index route all surf destinations
function index(req, res) {
    // Destination
    // .find()
    //   .sort({ createdAt: -1})
    //   .then( destination => res.json(destination))
    //   .catch( err => res.status(400).json(err))
  }


// Create Surf Destination
function create(req,res) {
    // const newDestination = new Destination({
    //   name: req.body.name,
    //   coordinates: req.body.coordinates.map(coord => parseFloat(coord, 10)),
    //   description: req.body.description,
    //   creatorId: req.user.id,
    //   createdAt: req.body.createdAt
    // });
    // newDestination.save()
    //   .then(destination => res.json(destination))
    //   .catch(err => res.status(400).json(err))
  }

// Show One Surf Destination
function show(req,res) {
    // Destination
    // .findById(req.params.id)
    // .then(destination => {
    //   if(!destination) {
    //     return res.status(404).json({error: "Can't find that destination"})
    //   }
    //   return res.json(destination)
    // })
}


// Delete Destination
function deleteSurfSpot(req, res) {
    // Destination
    // .findById(req.params.id)
    // .then( destination => {
    //   if(!destination) {
    //     return res.status(404).json({error: "Can't find that destination"})
    //   }
    //   Destination.deleteOne(destination)
    //     .then(destination => res.status(200).json({msg: "destination deleted"}))
    //     .catch(err => console.log(err));
    // });
  }

  // Update Destination
function update(req, res) {
    // Destination
    //   .findByIdAndUpdate(
    //     req.params.id, 
    //     req.body, 
    //     { new: true }
    //     ).then(destination => res.json(destination))
    //       .catch(err => console.log(err));
  };


 // Functions for Favorite Destinations  

// Show Destination's Favorites
function showFavorite( req, res) {
    // favorite
    // .find({ destinationId: req.params.id })
    // .sort({ createdAt: -1 })
    // .then(favorites => res.json(favorites))
    // .catch(err => res.status(400).json(err))
}


// Create a Favorite Destination
function createFavorite(req, res) {
    // const newFavorite = new favorite({
    //     creatorId: req.user.id,
    //     destinationId: req.params.id,
    //   });
    //   newFavorite.save()
    //     .then(favorite => res.json(favorite))
    //     .catch(err => res.status(400).json(err))
    }

// Delete a Favorite Destination
function deleteFavorite(req, res) {
    // Favorite
    //   .findById(req.params.favoriteId)
    //   .then(favorite => {
    //     if(!favorite) {
    //       return res.status(404).json({ error: "Can't find that favorite destination" })
    //     }
    //     Favorite.deleteOne(favorite)
    //       .then(favorite => res.json({ msg: "favorite deleted" }))
    //       .catch(err => console.log(err))
    //   });
  }




