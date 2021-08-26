const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all plans
router.get("/", async (req, res) => {
  try {
    const plans = await db.Plan.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']}
    })
    res.status(200).json(plans)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one plan by id tag
router.get("/:id", async (req, res) => {
  try {
    const plan = await db.Plan.findOne({
      where: { id: req.params.id},
      attributes: {exclude: ['createdAt', 'updatedAt']}
    });
    if(!plan){
      res.status(404).json({ message: 'no plan found with this id' });
    }
    res.status(200).json(plan);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new plan
router.post("/", async (req, res) => {
  try{
    const newPlan = await db.Plan.create(req.body);
    res.status(200).json(newPlan);
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});


// delete a plan by id
router.delete("/:id", async (req, res) => {
  try {
    const delPlan = await db.Plan.destroy({
      where: { id: req.params.id }
    });
    if(!delPlan){
      res.status(404).json({ message: 'no plan found with that id'});
    }
    res.status(200).json({ message: 'plan removed'})
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;