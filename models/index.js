const User = require("./User");
const Trip = require("./Trip");
const Comment = require("./Comment");
const Budget = require("./Budget");
const Plan = require("./Plan");

// Comment.belongsTo(Trip);
// Trip.hasMany(Comment);

// Comment.belongsTo(Plan);
// Plan.hasMany(Comment);

// Trip.hasMany(Plan);
// Plan.belongsTo(Trip);

// Trip.belongsToMany(User, {
//   through: `UserTrip`,
// });
// User.belongsToMany(Trip, {
//   through: `UserTrip`,
// });

// Plan.belongsToMany(User, {
//   through: `UserPlan`,
// });
// User.belongsToMany(Plan, {
//   through: `UserPlan`,
// });

// Budget.belongsTo(Trip);
// Trip.hasOne(Budget);

// Budget.belongsTo(Plan);
// Plan.hasOne(Budget);

// Budget.belongsTo(User);
// User.hasMany(Budget);

module.exports = {
  User,
  Trip,
  Comment,
  Budget,
  Plan,
};
