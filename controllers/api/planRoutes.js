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
          as:`SavedUser`,
          attributes: {exclude: [`createdAt`, `updatedAt`]},
          
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
        content: req.body.content
      },
      {where:{id:req.params.id}})
      res.status(200).json({message: `plan updated`})
    
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
})

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