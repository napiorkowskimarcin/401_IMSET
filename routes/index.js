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
//GET MAIN PAGE FROM THE BUTTON
router.post("/", (req, res) => {
  try {
    res.render("index", {
      layout: "main",
    });
  } catch (error) {
    return console.log(error);
  }
});

// LOAD SOMETHING FOR A BUTTON
router.get("/pakiet", (req, res) => {
  res.render("pakiet", {
    layout: "main",
  });
});
router.post("/pakiet", (req, res) => {
  res.render("pakiet", {
    layout: "main",
  });
});

module.exports = router;
