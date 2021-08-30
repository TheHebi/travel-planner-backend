const express = require("express");
const router = express.Router();
const db = require("../../models");
const tokenAuth = require("../../utils/auth");

// find all budget items
router.get("/", async (req, res) => {
  try {
    const items = await db.BudgetItem.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one budget item by id tag
router.get("/:id", async (req, res) => {
  try {
    const item = await db.BudgetItem.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    if (!item) {
      res.status(404).json({ message: `no item found with this id` });
    }
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new budget item
router.post("/", tokenAuth, async (req, res) => {
  try {
    const newItem = await db.BudgetItem.create(req.body);
    res.status(200).json(newItem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a budget item
router.put("/:id", tokenAuth, async (req, res) => {
  try {
    db.BudgetItem.update(
      {
        price: req.body.price,
        description: req.body.description
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: `item updated` });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a budget item by id
router.delete("/:id", tokenAuth, async (req, res) => {
  try {
    const delItem = await db.BudgetItem.destroy({
      where: { id: req.params.id },
    });
    console.log(delItem);
    if (!delItem) {
      res.status(404).json({ message: `no item found with this id` });
    }
    res.status(200).json({ message: "item deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
