var express = require("express");
var router = express.Router();

router.get("/users", function (req, res, next) {
  res.json({
    mesagge: "Hallo world",
  });
});

module.exports = router;
