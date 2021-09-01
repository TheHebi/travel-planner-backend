const {Budget} = require('../models');

const budgetData = [
    {
        TripId:1,
        UserId:1,
    },
    {
        TripId:1,
        UserId:2,
    },
    {
        TripId:1,
        UserId:3,
    },
    {
        TripId:1,
        UserId:4,
    },
    {
        TripId:2,
        UserId:1,
    },
    {
        TripId:2,
        UserId:2,
    },
    {
        TripId:2,
        UserId:3,
    },
    {
        TripId:2,
        UserId:4,
    },
    {
        TripId:3,
        UserId:1,
    },
    {
        TripId:3,
        UserId:2,
    },
    {
        TripId:3,
        UserId:3,
    },
    {
        TripId:3,
        UserId:4,
    },
    {
        TripId:4,
        UserId:1,
    },
    {
        TripId:4,
        UserId:2,
    },
    {
        TripId:4,
        UserId:3,
    },
    {
        TripId:4,
        UserId:4,
    },
];

const seedBudgets = () => Budget.bulkCreate(budgetData);

module.exports = seedBudgets;