const {Budget} = require('../models');

const budgetData = [

];

const seedBudgets = () => Budget.bulkCreate(budgetData);

module.exports = seedBudgets;