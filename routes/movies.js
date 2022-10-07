var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/movie');

/* GET movies listing. */
router.get('/', function(req, res, next) {
  Movie.find().sort('-year').exec(function(err,movies){
    if(err) res.status(500).send(err);
    else res.status(200).json(movies);
  })
});


// get the movies by id
router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, function(err,movieinfo){
    if(err) res.status(500).send(err);
    else res.status(200).json(movieinfo);
  })
});

// post a new movie
router.post('/', function(req, res, next) {
  Movie.create(req.body, function(err, movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

// put the movie identified by id
router.put('/:id', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function(err,movieinfo){
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

// Delete the movie identified by id
router.delete('/:id', function(req, res, next) {
  Movie.findByIdAndDelete(req.params.id, function(err,movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});



module.exports = router;


