const express = require('express');
const router = express.Router();



router.get("/movies", function(req, res, next) {
    res.send(`Sucessfully get detail of author`)
  })


  router.post("/movies", function(req, res, next) {
    res.send(`Sucessfully post detail of author`)
  })  

  router.put("/movies", function(req, res, next) {
    res.send(`Sucessfully update detail of author`)
  }) 

  router.delete("/movies", function(req, res, next) {
    res.send(`Sucessfully delete detail of author`)
  }) 

  module.exports = router;
