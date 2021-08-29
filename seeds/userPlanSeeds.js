const db = require("../models");

const seedSavedPlans = async () =>{
    const users = await db.User.findAll()
    const u1 = users[0]
    await u1.addSavedPlan(2)
    const u2 = users[1]
    await u2.addSavedPlan([1,4])
    const u3 = users[2]
    await u3.addSavedPlan([3,4,5])
    const u4 = users[3]
    await u4.addSavedPlan([1,2])
};

module.exports = seedSavedPlans;