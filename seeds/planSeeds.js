const Plan = require('../models/Plan');

const planData = [
    {
        tripId: 1,
        name: 'The Louvre Museum',
        budget: 60,
        content:'We will visit the Mona Lisa',
        userId: 1
    },
    {
        tripId: 1,
        name: 'Paris Saint-Germain F.C. game',
        budget: 200,
        content:'We will watch PSG vs Nantes 11/21/22',
        userId: 3
    },
    {
        tripId: 1,
        name: 'Eiffel Tower',
        budget: 100,
        content:'We will go see the Eiffel Tower and spend the day in the surrounding area',
        userId: 2
    },
    {
        tripId: 1,
        name: 'Sainte-Chapelle',
        budget: 50,
        content:'The Sainte-Chapelle is the finest royal chapel to be built in France and features a truly exceptional collection of stained-glass windows. It was built in the mid 13th century by Louis IX, at the heart of the royal residence, the Palais de la Cité.',
        userId: 4
    },
    {
        tripId: 2,
        name: 'Day One: Examine the main floor!',
        budget: 100,
        content:'Start the day by taking a look at everything in the main showroom floor, then marking down what we want to see the next day!',
        userId: 1
    },
    {
        tripId: 2,
        name: 'Board game night!',
        budget: 100,
        content:'After day one of PAXWest we will meet at the hotel and play games till the early morning!',
        userId: 3
    },
    {
        tripId: 2,
        name: 'End of convention board game night!',
        budget: 200,
        content:'After the last day, we meet again and jam board games!!',
        userId: 3
    },
    {
        tripId: 3,
        name: 'Rosarito Beach ALL DAY!',
        budget: 100,
        content:'Spend all day at the Rosarito beach!!!',
        userId: 2
    },
    {
        tripId: 3,
        name: 'Cornado Central Beach!',
        budget: 100,
        content:'Spend the whole day at the Cornado Central Beach!',
        userId: 4
    },
    {
        tripId: 3,
        name: 'Dolphin Beach',
        budget: 100,
        content:'Spend all day at Dolphin Beach!',
        userId: 2
    },
    {
        tripId: 3,
        name: 'Relax at the hotel pool',
        budget: 200,
        content:'After three busy days at the beach one day to relax poolside!',
        userId: 4
    },
    {
        tripId: 4,
        name: 'Ride the Gondolas',
        budget: 400,
        content:'Spend the day riding gondolas around venice and seeing a variety of things! and of course SHOPPPING!!!',
        userId: 2
    },
    {
        tripId: 4,
        name: 'Lido di Jesolo Beach',
        budget: 100,
        content:'Spend the day relaxing by the beach!!',
        userId: 1
    },
    {
        tripId: 4,
        name: 'Visit the markets of Venice!',
        budget: 400,
        content:'Start the day at Rialto market and visit a variety of markets!',
        userId: 3
    },
    {
        tripId: 4,
        name: 'Drive to the Vatican',
        budget: 100,
        content:'Get up early, ride the train from Venice to Vatican City! Spend whole day touring!',
        userId: 4
    },
];

const seedPlans = () => Plan.bulkCreate(planData);

module.exports = seedPlans;