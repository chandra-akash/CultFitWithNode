const express = require("express");

const router = express.Router();

router.get("", async function (req, res) {

  return res.render("selectedItem/selectedItem.ejs");
});


module.exports = router;
