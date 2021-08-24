const express = require('express');
const router = express.Router();
const tripRoutes = require("./tripRoutes");
const userRoutes = require('./userRoutes');
const budgetRoutes = require('./budgetRoutes');
const commentRoutes = require('./commentRoutes');
const planRoutes = require('./planRoutes');

router.use("/users",userRoutes);
router.use("/trips",tripRoutes);
router.use("/budgets",budgetRoutes);
router.use("/plans",planRoutes);
router.use("/comments",commentRoutes);


module.exports = router;