const express = require("express");

const router = express.Router();

router.get("", async function (req, res) {

  return res.render("home/home.ejs");
});



module.exports = router;
