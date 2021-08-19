const express = require("express");
const sequelize = require("../../config/connection");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../../models");

// find all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await db.Recipe.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one recipe by id value including associated genres and comments
router.get("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new recipe
router.post("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a recipe by id
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(404).json(err);
  }
});

// upvotes
router.put(`/upvote/:id`, async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

// downvotes
router.put(`/downvote/:id`, async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});
module.exports = router;
