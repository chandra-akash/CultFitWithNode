const express = require("express");

const router = express.Router();

router.get("", async function (req, res) {

  return res.render("care/care.ejs");
});


module.exports = router;
