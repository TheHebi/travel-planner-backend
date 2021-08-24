const Plan = require('../models/Plan');

const planData = [
  
];

const seedPlans = () => Plan.bulkCreate(planData);

module.exports = seedPlans;