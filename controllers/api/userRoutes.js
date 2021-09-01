const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require(`bcrypt`);
const jwt = require("jsonwebtoken");
const tokenAuth = require("../../utils/auth")


// find all users
router.get("/", async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one user by id tag and associated recipes and comments
router.get("/:id", async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
      include: [
        {
          model: db.Trip,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
          include:{
            model: db.User,
            attributes: { exclude: [`createdAt`, `updatedAt`] },
            as: `SavedUser`
          }
        },
        {
          model: db.Comment,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
        {
          model: db.Plan,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
        {
          model: db.Plan,
          as: `SavedPlan`,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
          through: { attributes: { exclude: [`createdAt`, `updatedAt`] } },
        },
        {
          model: db.Trip,
          as: `SavedTrip`,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
          through: { attributes: { exclude: [`createdAt`, `updatedAt`] } },
        },
        {
          model: db.Budget,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
          include:{
            model: db.BudgetCategory,
            attributes: { exclude: [`createdAt`, `updatedAt`] },
            include:{
              model: db.BudgetItem,
              attributes: { exclude: [`createdAt`, `updatedAt`] },
            }
          }
        }
      ],
    });
    if (!user) {
      res.status(404).json({ message: `no user found with this id` });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a user
router.put("/:id", tokenAuth, async (req,res)=>{
  try{
      db.User.update({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      },
      {where:{id:req.params.id}})
      res.status(200).json({message: `user updated`})
    
  }catch(err){
    console.log(err)
    res.status(500).json(err)
  }
})

// create a new user
router.post("/", async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    const token = await jwt.sign({
      name: user.username,
      email: user.email,
      id: user.id
    },
    process.env.JWT_SECRET,
    {
      expiresIn:`2h`
    })
    res.status(200).json({ token, user });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// user login
router.post("/login", async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: { username: req.body.username },
    });
    if (!user) {
      res.status(403).json({
        message: "incorrect username or password",
      });
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      res.status(403).json({ message: "incorrect username or password" });
    } else {
      const token = await jwt.sign(
        {
          name: user.username,
          email: user.email,
          id: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: `2h`,
        }
      );
      res.json({ token, user });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a user by id
router.delete("/:id", tokenAuth, async (req, res) => {
  try {
    const delUser = await db.User.destroy({
      where: { id: req.params.id },
    });
    console.log(delUser);
    if (!delUser) {
      res.status(404).json({ message: `no user found with this id` });
    }
    res.status(200).json({ message: "user deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
