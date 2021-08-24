const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all comments
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one comment by id tag
router.get("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new comment
router.post("/", async (req, res) => {
  try{
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});


// delete a comment by id
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;