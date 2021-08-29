const express = require("express");
const router = express.Router();
const db = require("../../models");
const tokenAuth = require("../../utils/auth")

// find all budgets
router.get("/", async (req, res) => {
  try {
    const budgets = await db.Budget.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(budgets);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one budget by id tag
router.get("/:id", async (req, res) => {
  try {
    const budget = await db.Budget.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
      include: {
        model: db.BudgetCategory,
        attributes: { exclude: [`createdAt`, `updatedAt`] },
        include:{
          model: db.BudgetItem,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        }
      }
    });
    if (!budget) {
      res.status(404).json({ message: `no budget found with this id` });
    }
    res.status(200).json(budget);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new budget
router.post("/", tokenAuth, async (req, res) => {
  try{
    const newBudget = await db.Budget.create(req.body);
    res.status(200).json(newBudget);
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});

// delete a budget by id
router.delete("/:id", tokenAuth, async (req, res) => {
  try {
    const delBudget = await db.Budget.destroy({
      where: { id: req.params.id },
    });
    console.log(delBudget);
    if (!delBudget) {
      res.status(404).json({ message: `no budget found with this id` });
    }
    res.status(200).json({ message: "budget deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;