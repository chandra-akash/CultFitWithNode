const express = require("express");

const router = express.Router();

router.get("", async function (req, res) {

  return res.render("payment/payment.ejs");
});


module.exports = router;
