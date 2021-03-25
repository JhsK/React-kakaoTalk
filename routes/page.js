const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  next();
});

router.get("/", (req, res) => {
  // res.render("test page");
  res.send("test");
});

module.exports = router;
