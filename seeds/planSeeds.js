const {Plan} = require('../models');

const planData = [
    {
        TripId: 1,
        name: 'The Louvre Museum',
        budget: 60,
        content:'We will visit the Mona Lisa',
        UserId: 1,
        date: "11/13/2021"
    },
    {
        TripId: 1,
        name: 'Paris Saint-Germain F.C. game',
        budget: 200,
        content:'We will watch PSG vs Nantes 11/21/22',
        UserId: 3,
        date: "11/22/2021"
    },
    {
        TripId: 1,
        name: 'Eiffel Tower',
        budget: 100,
        content:'We will go see the Eiffel Tower and spend the day in the surrounding area',
        UserId: 2,
        date: "11/14/2021"
    },
    {
        TripId: 1,
        name: 'Sainte-Chapelle',
        budget: 50,
        content:'The Sainte-Chapelle is the finest royal chapel to be built in France and features a truly exceptional collection of stained-glass windows. It was built in the mid 13th century by Louis IX, at the heart of the royal residence, the Palais de la Cité.',
        UserId: 4,
        date: "11/16/2021"
    },
    {
        TripId: 2,
        name: 'Day One: Examine the main floor!',
        budget: 100,
        content:'Start the day by taking a look at everything in the main showroom floor, then marking down what we want to see the next day!',
        UserId: 1,
        date: "09/03/2021"
    },
    {
        TripId: 2,
        name: 'Board game night!',
        budget: 100,
        content:'After day one of PAXWest we will meet at the hotel and play games till the early morning!',
        UserId: 3,
        date: "09/04/2021"
    },
    {
        TripId: 2,
        name: 'End of convention board game night!',
        budget: 200,
        content:'After the last day, we meet again and jam board games!!',
        UserId: 3,
        date: "09/05/2021"
    },
    {
        TripId: 3,
        name: 'Rosarito Beach ALL DAY!',
        budget: 100,
        content:'Spend all day at the Rosarito beach!!!',
        UserId: 2,
        date: "12/14/2021"
    },
    {
        TripId: 3,
        name: 'Cornado Central Beach!',
        budget: 100,
        content:'Spend the whole day at the Cornado Central Beach!',
        UserId: 4,
        date: "12/15/2021"
    },
    {
        TripId: 3,
        name: 'Dolphin Beach',
        budget: 100,
        content:'Spend all day at Dolphin Beach!',
        UserId: 2,
        date: "12/17/2021"
    },
    {
        TripId: 3,
        name: 'Relax at the hotel pool',
        budget: 200,
        content:'After three busy days at the beach one day to relax poolside!',
        UserId: 4,
        date: "12/18/2021"
    },
    {
        TripId: 4,
        name: 'Ride the Gondolas',
        budget: 400,
        content:'Spend the day riding gondolas around venice and seeing a variety of things! and of course SHOPPPING!!!',
        UserId: 2,
        date: "01/15/2021"
    },
    {
        TripId: 4,
        name: 'Lido di Jesolo Beach',
        budget: 100,
        content:'Spend the day relaxing by the beach!!',
        UserId: 1,
        date: "01/16/2021"
    },
    {
        TripId: 4,
        name: 'Visit the markets of Venice!',
        budget: 400,
        content:'Start the day at Rialto market and visit a variety of markets!',
        UserId: 3,
        date: "01/19/2021"
    },
    {
        TripId: 4,
        name: 'Drive to the Vatican',
        budget: 100,
        content:'Get up early, ride the train from Venice to Vatican City! Spend whole day touring!',
        UserId: 4,
        date: "01/24/2021"
    },
];

const seedPlans = () => Plan.bulkCreate(planData);

module.exports = seedPlans;