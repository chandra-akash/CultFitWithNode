const express = require("express");

const router = express.Router();

router.get("", async function (req, res) {

  return res.render("ThankYouPopUp/ThankYouPopUp.ejs");
});


module.exports = router;
