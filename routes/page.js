const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  next();
});

router.get("/", (req, res) => {
  res.render("index.html");
});

module.exports = router;
