const express = require("express");
const Store = require("../models/store.module");

const router = express.Router();

router.get("/:id", async function (req, res) {
  try{
    var item = await Store.findById(req.params.id).lean().exec();
  return res.render("selectedItem/selectedItem.ejs",{item:item});
    // res.send(item);
  // console.log(item);
  }catch(err){
    console.log(err)
  }
});



module.exports = router;
