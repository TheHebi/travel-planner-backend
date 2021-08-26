const Trip = require('../models/Trip');

const tripData = [
    {
        name:"Paris 2021",
        destination:"Paris, France",
        totalCost:5000,
        travelMethod:"Plane",
        lodging:"Hotel",
        departure:"11/12/2021",
        return:"11/21/21",
        userId: 1
    },
    {
        name:"PAX West",
        destination:"Seattle, WA",
        totalCost:800,
        travelMethod:"Car",
        lodging:"Hotel",
        departure:"09/02/2021",
        return:"09/07/21",
        userId: 3
    },
    {
        name:"Mexico Getaway",
        destination:"Tijuana, Mexico",
        totalCost:2000,
        travelMethod:"Plane",
        lodging:"Hotel",
        departure:"12/13/2021",
        return:"12/19/21",
        userId: 4
    },
    {
        name:"Let's Go To Venice",
        destination:"Venice Italy",
        totalCost:8000,
        travelMethod:"Plane",
        lodging:"Hotel",
        departure:"01/13/2022",
        return:"01/30/2022",
        userId: 2
    },
  
];

const seedTrips = () => Trip.bulkCreate(tripData);

module.exports = seedTrips;