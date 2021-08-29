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
          attributes: {
            exclude: [`updatedAt`, `TripId`, `PlanId`, `UserId`, `CommentId`],
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
              attributes: {
                exclude: [
                  `updatedAt`,
                  `TripId`,
                  `PlanId`,
                  `UserId`,
                  `CommentId`,
                ],
              },
              include: {
                model: db.User,
                attributes: {
                  exclude: [`createdAt`, `updatedAt`, `password`, `email`],
                },
              },
            },
          ],
        },
        {
          model: db.Plan,
          attributes: {
            exclude: [`createdAt`, `updatedAt`, `TripId`, `UserId`],
          },
          include: {
            model: db.Comment,
            attributes: {
              exclude: [`updatedAt`, `TripId`, `PlanId`, `UserId`, `CommentId`],
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
                attributes: {
                  exclude: [
                    `updatedAt`,
                    `TripId`,
                    `PlanId`,
                    `UserId`,
                    `CommentId`,
                  ],
                },
                include: {
                  model: db.User,
                  attributes: {
                    exclude: [`createdAt`, `updatedAt`, `password`, `email`],
                  },
                },
              },
            ],
          },
        },
        {
          model: db.User,
          as: `SavedUser`,
          attributes: {
            exclude: [
              `createdAt`,
              `updatedAt`,
              `password`,
              `email`,
              `UserTrip`,
            ],
          },
        },
        {
          model: db.Budget,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
          include: [
            {
              model: db.User,
              attributes: {
                exclude: [`createdAt`, `updatedAt`, `password`, `email`],
              },
            },
            {
              model: db.BudgetCategory,
              attributes: { exclude: [`createdAt`, `updatedAt`] },
              include: {
                model: db.BudgetItem,
                attributes: { exclude: [`createdAt`, `updatedAt`] },
              },
            },
          ],
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

// add a saved trip
router.post('/savedtrips', async (req, res) => {
  try {
      const saveUser = await db.User.findByPk(req.body.UserId);
      await saveUser.addSavedTrip(req.body.TripId);
      res.status(200).json({message:`Saved Trip Added`})
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// remove a saved trip
router.delete('/savedtrips', async (req, res) => {
  try {
      const saveUser = await db.User.findByPk(req.body.UserId);
      await saveUser.removeSavedTrip(req.body.TripId);
      res.status(200).json({message:`Saved Trip Removed`})
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
