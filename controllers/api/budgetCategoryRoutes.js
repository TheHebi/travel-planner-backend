const express = require("express");
const router = express.Router();
const db = require("../../models");
const tokenAuth = require("../../utils/auth");

// find all budget categories
router.get("/", async (req, res) => {
  try {
    const categories = await db.BudgetCategory.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one budget category by id tag
router.get("/:id", async (req, res) => {
  try {
    const category = await db.BudgetCategory.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
      include: {
        model: db.BudgetItem,
        attributes: { exclude: [`createdAt`, `updatedAt`] },
      },
    });
    if (!category) {
      res.status(404).json({ message: `no category found with this id` });
    }
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new budget
router.post("/", tokenAuth, async (req, res) => {
  try {
    const newBudget = await db.BudgetCategory.create(req.body);
    res.status(200).json(newBudget);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a budget category
router.put("/:id", tokenAuth, async (req, res) => {
  try {
    db.BudgetCategory.update(
      {
        description: req.body.description,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: `category updated` });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a budget category by id
router.delete("/:id", tokenAuth, async (req, res) => {
  try {
    const delCategory = await db.BudgetCategory.destroy({
      where: { id: req.params.id },
    });
    console.log(delCategory);
    if (!delCategory) {
      res.status(404).json({ message: `no category found with this id` });
    }
    res.status(200).json({ message: "category deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
