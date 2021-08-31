const {BudgetCategory} = require('../models');

const budgetCategoryData = [
    {
        BudgetId: 1,
        description: `Hotel!`
    },
    {
        BudgetId: 1,
        description: `Flight & Trains`
    },
    {
        BudgetId: 1,
        description: `Food`
    },
    {
        BudgetId: 1,
        description: `Eiffel Tower`
    },
    {
        BudgetId: 2,
        description: `Hotel!`
    },
    {
        BudgetId: 2,
        description: `Flight & Trains`
    },
    {
        BudgetId: 2,
        description: `Food`
    },
    {
        BudgetId: 2,
        description: `The Louvre and other Museums`
    },
    {
        BudgetId: 3,
        description: `Hotel!`
    },
    {
        BudgetId: 3,
        description: `Uber`
    },
    {
        BudgetId: 3,
        description: `Cigarettes & Coffee`
    },
    {
        BudgetId: 3,
        description: `Shopping`
    },
    {
        BudgetId: 4,
        description: `Hostels`
    },
    {
        BudgetId: 4,
        description: `Trains`
    },
    {
        BudgetId: 4,
        description: `Food`
    },
    {
        BudgetId: 4,
        description: `Fun`
    },
    {
        BudgetId: 5,
        description: `Hotel`
    },
    {
        BudgetId: 5,
        description: `Food`
    },
    {
        BudgetId: 5,
        description: `New Computer Parts`
    },
    {
        BudgetId: 6,
        description: `Hotel`
    },
    {
        BudgetId: 6,
        description: `Food`
    },
    {
        BudgetId: 6,
        description: `New gear`
    },
    {
        BudgetId: 7,
        description: `Hotel`
    },
    {
        BudgetId: 7,
        description: `Food`
    },
    {
        BudgetId: 7,
        description: `New exclusive pins`
    },
    {
        BudgetId: 8,
        description: `Hotel`
    },
    {
        BudgetId: 8,
        description: `Food`
    },
    {
        BudgetId: 8,
        description: `Board Games`
    },
    {
        BudgetId: 9,
        description: `Beach House`
    },
    {
        BudgetId: 9,
        description: `Tacos`
    },
    {
        BudgetId: 9,
        description: `Travel`
    },
    {
        BudgetId: 9,
        description: `Cerveza`
    },
    {
        BudgetId: 10,
        description: `Beach House`
    },
    {
        BudgetId: 10,
        description: `Tacos`
    },
    {
        BudgetId: 10,
        description: `Travel`
    },
    {
        BudgetId: 10,
        description: `Cerveza`
    },
    {
        BudgetId: 11,
        description: `Beach House`
    },
    {
        BudgetId: 11,
        description: `Tacos`
    },
    {
        BudgetId: 11,
        description: `Travel`
    },
    {
        BudgetId: 11,
        description: `Cerveza`
    },
    {
        BudgetId: 12,
        description: `Beach House`
    },
    {
        BudgetId: 12,
        description: `Taco`
    },
    {
        BudgetId: 12,
        description: `Travel`
    },
    {
        BudgetId: 12,
        description: `Cerveza`
    },
    {
        BudgetId: 13,
        description: `Lodging`
    },
    {
        BudgetId: 13,
        description: `Beach time`
    },
    {
        BudgetId: 13,
        description: `Travel`
    },
    {
        BudgetId: 13,
        description: `Pasta`
    },
    {
        BudgetId: 14,
        description: `Lodging`
    },
    {
        BudgetId: 14,
        description: `Leaning Towers`
    },
    {
        BudgetId: 14,
        description: `Travel`
    },
    {
        BudgetId: 14,
        description: `Pizza`
    },
    {
        BudgetId: 15,
        description: `Lodging`
    },
    {
        BudgetId: 15,
        description: `Vatican`
    },
    {
        BudgetId: 15,
        description: `Trains`
    },
    {
        BudgetId: 15,
        description: `Pasta/Pizza`
    },
    {
        BudgetId: 16,
        description: `Lodging`
    },
    {
        BudgetId: 16,
        description: `Rome`
    },
    {
        BudgetId: 16,
        description: `Gondola Rides`
    },
    {
        BudgetId: 16,
        description: `Pasta/Pizza`
    },
];

const seedBudgetCategory = () => BudgetCategory.bulkCreate(budgetCategoryData);

module.exports = seedBudgetCategory;