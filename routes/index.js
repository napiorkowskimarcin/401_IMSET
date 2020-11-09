const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.render("index", {
      layout: "main",
    });
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
