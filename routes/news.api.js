const express = require('express');
const router = express.Router();



router.get("/news", function(req, res, next) {
    res.send(`Sucessfully get detail of author`)
  })


  router.post("/news", function(req, res, next) {
    res.send(`Sucessfully post detail of author`)
  })  

  router.put("/news", function(req, res, next) {
    res.send(`Sucessfully update detail of author`)
  }) 

  router.delete("/news", function(req, res, next) {
    res.send(`Sucessfully delete detail of author`)
  }) 

  module.exports = router;