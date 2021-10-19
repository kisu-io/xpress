const express = require('express');
const router = express.Router();


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


router.post("/news", function (req, res, next) {
  const requestBody = {
    "title": "Morning HCM",
    "category": ["daily", "general", "covid19"],
    "city": "HCM"
  };
  res.send(`Successfully create a news about ${requestBody.title} in ${requestBody.city} and related to category of ${requestBody.category[0]}, ${requestBody.category[1]} and ${requestBody.category[2]}`);
})


router.put("/news/:id", function (req, res, next) {
  const requestBody = {
    "title": "Afternoon HCM",
    "category": ["daily", "general", "covid19"],
    "city": "HCM"
  };
  res.send(`Successfully create a news about ${requestBody.title} in ${requestBody.city} and related to category of ${requestBody.category[0]}, ${requestBody.category[1]} and ${requestBody.category[2]}`);
})

router.delete("/news/:id", function (req, res, next) {
  const params = req.params;
  console.log(params);
  res.send(`Successfully find the news with ${params.id}, and delete`);
})

module.exports = router;
