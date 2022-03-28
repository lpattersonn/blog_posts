const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (res, req) => {
  const URL = "https://api.hatchways.io/assessment/blog/posts?tag=ping";
  axios
    .get(`${URL}`)
    .then((response) => {
      console.log(res.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
