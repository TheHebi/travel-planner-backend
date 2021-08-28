const express = require("express");
const sequelize = require("../../config/connection");
const router = express.Router();
const db = require("../../models");
const tokenAuth = require("../../utils/auth");

// find all trips
router.get("/", async (req, res) => {
  try {
    const trips = await db.Trip.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(trips);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one trip by id value including associated genres and comments
router.get("/:id", async (req, res) => {
  try {
    const trip = await db.Trip.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
      include: [
        {
          model: db.Comment,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
          include: [
            {
              model: db.User,
              attributes: { exclude: [`createdAt`, `updatedAt`] },
            },
            {
              model: db.Comment,
              attributes: { exclude: [`createdAt`, `updatedAt`] },
              include: {
                model: db.User,
                attributes: { exclude: [`createdAt`, `updatedAt`] },
              },
            },
          ],
        },
        {
          model: db.Plan,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
          include: {
            model: db.Comment,
            attributes: { exclude: [`createdAt`, `updatedAt`] },
            include: [
              {
                model: db.User,
                attributes: { exclude: [`createdAt`, `updatedAt`] },
              },
              {
                model: db.Comment,
                attributes: { exclude: [`createdAt`, `updatedAt`] },
                include: {
                  model: db.User,
                  attributes: { exclude: [`createdAt`, `updatedAt`] },
                },
              },
            ],
          },
        },
        {
          model: db.User,
          as: `SavedUser`,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
      ],
    });
    if (!trip) {
      res.status(404).json({ message: `no trip found with this id` });
    }
    res.status(200).json(trip);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new trip
router.post("/", tokenAuth, async (req, res) => {
  try {
    const newTrip = await db.Trip.create(req.body);
    res.status(200).json(newTrip);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a trip
router.put("/:id", tokenAuth, async (req, res) => {
  try {
    db.Trip.update(
      {
        name: req.body.name,
        destination: req.body.destination,
        totalCost: req.body.totalCost,
        travelMethod: req.body.travelMethod,
        lodging: req.body.lodging,
        departure: req.body.departure,
        return: req.body.return,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: `trip updated` });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a trip by id
router.delete("/:id", tokenAuth, async (req, res) => {
  try {
    const delTrip = await db.Trip.destroy({
      where: { id: req.params.id },
    });
    console.log(delTrip);
    if (!delTrip) {
      res.status(404).json({ message: `no trip found with this id` });
    }
    res.status(200).json({ message: "trip deleted" });
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
