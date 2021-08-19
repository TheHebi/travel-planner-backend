const express = require('express');
const router = express.Router();
const tripRoutes = require("./tripRoutes");
const userRoutes = require('./userRoutes');

router.use("/users",userRoutes);
router.use("/trips",tripRoutes);


module.exports = router;