const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require(`bcrypt`);
const { signToken, authMiddleWare } = require("../utils/auth");

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

// create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await db.User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// user login
router.post("/login", async (req, res) => {
  try {
    const userLog = await db.User.findOne({
      where: { username: req.body.username },
    });
    if (!userLog) {
      res.status(403).json({
        message: "incorrect username or password",
      });
    } else {
      const passCheck = brcypt.compareSync(req.body.password, userLog.password);
      if (passCheck) {
        const token = await signToken(userLog);
        res.json({ token, user: userLog });
      } else {
        res.status(403).json({ message: "incorrect username or password" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a user by id
router.delete("/:id", authMiddleWare, async (req, res) => {
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
