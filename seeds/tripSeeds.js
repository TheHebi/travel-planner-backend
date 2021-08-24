const Trip = require('../models/Trip');

const tripData = [
  
];

const seedTrips = () => Trip.bulkCreate(tripData);

module.exports = seedTrips;