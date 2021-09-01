const express = require("express");
const router = express.Router();
const db = require("../../models");
const tokenAuth = require("../../utils/auth");

// find all comments
router.get("/", async (req, res) => {
  try {
    const comments = await db.Comment.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find all comments assosciated to a trip
router.get("/trips/:tripId", async (req, res) => {
  try {
    const comments = await db.Comment.findAll({
      attributes: { exclude: [`updatedAt`] },
      where: {
        TripId: req.params.tripId,
      },
      include: [
        {
          model: db.User,
          attributes: {
            exclude: [`createdAt`, `updatedAt`, `password`, `email`],
          },
        },
        {
          model: db.Comment,
          as: `SubComment`,
          attributes: {
            exclude: [`updatedAt`],
          },
          include: [
            {
              model: db.User,
              attributes: {
                exclude: [`createdAt`, `updatedAt`, `password`, `email`],
              },
            },
          ],
        },
      ],
    });
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one comment by id tag
router.get("/:id", async (req, res) => {
  try {
    const comment = await db.Comment.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`updatedAt`] },
      include: [
        {
          model: db.User,
          attributes: {
            exclude: [`createdAt`, `updatedAt`, `password`, `email`],
          },
        },
        {
          model: db.Comment,
          as: `SubComment`,
          attributes: {
            exclude: [`updatedAt`],
          },
          include: [
            {
              model: db.User,
              attributes: {
                exclude: [`createdAt`, `updatedAt`, `password`, `email`],
              },
            },
          ],
        },
      ],
    });
    if (!comment) {
      res.status(404).json({ message: `no comment found with this id` });
    }
    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new comment
router.post("/", tokenAuth, async (req, res) => {
  try {
    const newComment = await db.Comment.create(req.body);
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a comment
router.put("/:id", tokenAuth, async (req, res) => {
  try {
    db.Comment.update(
      {
        content: req.body.content,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: `user updated` });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a comment by id
router.delete("/:id", tokenAuth, async (req, res) => {
  try {
    const delComment = await db.Comment.destroy({
      where: { id: req.params.id },
    });
    console.log(delComment);
    if (!delComment) {
      res.status(404).json({ message: `no comment found with this id` });
    }
    res.status(200).json({ message: "comment deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
