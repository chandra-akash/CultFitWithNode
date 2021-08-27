const express = require("express");

const router = express.Router();
var Store = require("../models/store.module");


router.get("", async function (req, res) {
  var store = await Store.find({}).lean().exec();
  return res.render("store/store.ejs",{store:store});
  // res.send(store)
});

router.get("/men", async function (req, res) {
  var store = await Store.find({}).lean().exec();
  var arr = [];
  for(let i=0;i<store.length;i++){
    if(store[i].id=="men"){
      arr.push(store[i])
    }
  }

  return res.render("store/store.ejs",{store:arr});
  // res.send(store)
});

router.get("/girl", async function (req, res) {
  var store = await Store.find({}).lean().exec();
  var arr = [];
  for(let i=0;i<store.length;i++){
    if(store[i].id=="girl"){
      arr.push(store[i])
    }
  }

  return res.render("store/store.ejs",{store:arr});
  // res.send(store)
});

router.get("/gym", async function (req, res) {
  var store = await Store.find({}).lean().exec();
  var arr = [];
  for(let i=0;i<store.length;i++){
    if(store[i].id=="gym" || store[i].id=="bag"){
      arr.push(store[i])
    }
  }

  return res.render("store/store.ejs",{store:arr});
  // res.send(store)
});

router.post("", async function (req, res) {
  var item = await Store.create(req.body);
  res.send(item);
})




module.exports = router;
