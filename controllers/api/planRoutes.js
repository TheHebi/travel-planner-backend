const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all plans
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one plan by id tag
router.get("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new plan
router.post("/", async (req, res) => {
  try{
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});


// delete a plan by id
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;