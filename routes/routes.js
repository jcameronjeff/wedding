var express = require("express");
var router = express.Router();

/*
 * GET
 */
router.get("/events", (req, res) => {
  res.render("events");
});

router.get("/locations", (req, res) => {
  res.render("locations");
});
router.get("/hotels", (req, res) => {
  res.render("hotels");
});

router.get("/guestbook", (req, res) => {
  res.render("guestbook");
});
router.get("/registry", (req, res) => {
  res.render("registry");
});
module.exports = router;