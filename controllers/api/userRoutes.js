const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require(`bcrypt`);

// find all users
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one user by id tag and associated recipes and comments
router.get("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new user
router.post("/", async (req, res) => {
  try{
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});

// user login
router.post("/login", async (req, res) => {
  try{

  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
  
});

router.post('/logout', (req, res) => {
});

// delete a user by id
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;