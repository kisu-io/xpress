const express = require('express');
const router = express.Router();



router.get("/users", function(req, res, next) {
    res.send(`Sucessfully get detail of author`)
  })


  router.post("/users", function(req, res, next) {
    res.send(`Sucessfully post detail of author`)
  })  

  router.put("/users", function(req, res, next) {
    res.send(`Sucessfully update detail of author`)
  }) 

  router.delete("/users", function(req, res, next) {
    res.send(`Sucessfully delete detail of author`)
  }) 

  module.exports = router;