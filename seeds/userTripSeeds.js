const db = require("../models");

const seedSavedTrips = async () =>{
    const users = await db.User.findAll()
    const u1 = users[0]
    await u1.addSavedTrip([2,3,4])
    const u2 = users[1]
    await u2.addSavedTrip([1,2,3])
    const u3 = users[2]
    await u3.addSavedTrip([1,3,4])
    const u4 = users[3]
    await u4.addSavedTrip([1,2,4])
};

module.exports = seedSavedTrips;
