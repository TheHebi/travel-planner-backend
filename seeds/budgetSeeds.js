const Budget = require('../models/Budget');

const budgetData = [

];

const seedBudgets = () => Budget.bulkCreate(budgetData);

module.exports = seedBudgets;