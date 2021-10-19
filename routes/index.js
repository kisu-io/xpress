var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  const { page, q, title, city, category } = req.query
  if (!page && !q && !title && !city && !category){
    res.send("Successfully get all news");
  } else if (page) {
    res.send(`Successfully get page ${page} news`) 
  } else if (category && city && title) {
    res.send(`Successfully get all news that have category according to ${category},${city},${title}`)
  } else if (city) {
    res.send(`Successfully get all news that have city according to ${city}`)
  }  else if (category) {
    res.send(`Successfully get all news that have category according to ${category}`)
  } else if (title) {
    res.send(`Successfully get all news that have tittle according to ${title}`)

  }
});

router.get("/:id", function(req, res, next) {
  const { id } = req.params;
  console.log(id)
  res.send(`Sucessfully get detail of 1 single new with the id is ${id}`)
})

module.exports = router;
