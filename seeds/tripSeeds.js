const Trip = require('../models/Trip');

const tripData = [
  
];

const seedTrips = () => Trip.bulkCreate(genreData);

module.exports = seedTrips;