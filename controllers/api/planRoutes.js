const express = require("express");
const router = express.Router();
const db = require("../../models");
const tokenAuth = require("../../utils/auth")

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

// find all plans by trip id
router.get('/trips/:tripId', async (req, res) => {
  try {
    const plans = await db.Plan.findAll({
      where: {
        TripId: req.params.tripId,
      },
      attributes: {exclude: [`createdAt`, `updatedAt`]},
      include: [
        {
          model: db.Comment,
          attributes: {exclude: [`updatedAt`]},
          include: [
            {
              model: db.User,
              attributes: { exclude: [`createdAt`, `updatedAt`, `password`, `email`] }
            }
          ]
        },
        {
          model: db.User,
          attributes: {exclude: [`createdAt`, `updatedAt`, `password`, `email`]}
        },
        {
          model: db.User,
          as: `SavedUser`,
          attributes: {exclude: [`createdAt`, `updatedAt`, `password`, `email`]}
        }
      ]
    });

    if (!plans) {
      res.status(404).json({message: 'No plans associated with this trip'});
    }
    res.status(200).json(plans);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// find one plan by id tag
router.get("/:id", async (req, res) => {
  try {
    const plan = await db.Plan.findOne({
      where: { id: req.params.id},
      attributes: {exclude: ['createdAt', 'updatedAt']},
      include: [
        {
          model: db.Comment,
          attributes: {exclude: [`createdAt`, `updatedAt`]}
        },
        {
          model: db.User,
          attributes: {exclude: [`createdAt`, `updatedAt`, `password`, `email`]}
        },
        {
          model: db.User,
          as:`SavedUser`,
          attributes: {exclude: [`createdAt`, `updatedAt`, `password`, `email`]}
        }
      ]
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
router.post("/", tokenAuth, async (req, res) => {
  try{
    const newPlan = await db.Plan.create(req.body);
    res.status(200).json(newPlan);
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});

// update a plan
router.put("/:id", tokenAuth, async (req,res)=>{
  try{
      db.Plan.update({
        name: req.body.name,
        budget: req.body.budget,
        content: req.body.content,
        date: req.body.date
      },
      {where:{id:req.params.id}})
      res.status(200).json({message: `plan updated`})
    
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
})

// add a saved plan
router.post('/savedplans', async (req, res) => {
  try {
      const saveUser = await db.User.findByPk(req.body.UserId);
      await saveUser.addSavedPlan(req.body.PlanId);
      res.status(200).json({message:`Saved Plan Added`})
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// remove a saved plan
router.delete('/savedplans', async (req, res) => {
  try {
    console.log(req.body)
      const saveUser = await db.User.findByPk(req.body.UserId);
      await saveUser.removeSavedPlan(req.body.PlanId);
      res.status(200).json({message:`Saved Plan Removed`})
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// delete a plan by id
router.delete("/:id", tokenAuth, async (req, res) => {
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