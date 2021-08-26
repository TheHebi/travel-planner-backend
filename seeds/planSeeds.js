const Plan = require('../models/Plan');

const planData = [
    {
        tripId:'',
        name: '',
        budget: ,
        content:'',
        userId: 
    }
  
];

const seedPlans = () => Plan.bulkCreate(planData);

module.exports = seedPlans;