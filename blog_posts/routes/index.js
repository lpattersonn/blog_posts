const express = require("express");
const router = express.Router();
const axios = require("axios");
/* GET home page. */
router.get("/", (req, res, next) => {
  axios
    .get("https://api.hatchways.io/assessment/blog/posts?tag=tech")
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    });
});

module.exports = router;
