const {Trip} = require('../models');

const tripData = [
    {
        name:"Paris 2021",
        destination:"Paris, France",
        departure:"11/12/2021",
        return:"11/21/2021",
        UserId: 1,
    },
    {
        name:"PAX West",
        destination:"Seattle, WA",
        departure:"09/02/2021",
        return:"09/07/2021",
        UserId: 3,
    },
    {
        name:"Mexico Getaway",
        destination:"Tijuana, Mexico",
        departure:"12/13/2021",
        return:"12/19/2021",
        UserId: 4,
    },
    {
        name:"Let's Go To Venice",
        destination:"Venice Italy",
        departure:"01/13/2022",
        return:"01/30/2022",
        UserId: 2,
    },
  
];

const seedTrips = () => Trip.bulkCreate(tripData);

module.exports = seedTrips;