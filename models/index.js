const User = require("./User");
const Trip = require("./Trip");
const Comment = require("./Comment");
const Budget = require("./Budget");
const Plan = require("./Plan");

Trip.hasMany(Comment);
Comment.belongsTo(Trip);

Plan.hasMany(Comment);
Comment.belongsTo(Plan);

User.hasMany(Comment);
Comment.belongsTo(User);

Trip.hasMany(Plan);
Plan.belongsTo(Trip);

User.hasMany(Trip);
Trip.belongsTo(User);

User.hasMany(Plan);
Plan.belongsTo(User);

// Plan.belongsToMany(User, {
//   through: `UserPlan`,
// });
// User.belongsToMany(Plan, {
//   through: `UserPlan`,
// });

// Trip.hasOne(Budget);
// Budget.belongsTo(Trip);

// Plan.hasOne(Budget);
// Budget.belongsTo(Plan);

// User.hasMany(Budget);
// Budget.belongsTo(User);

module.exports = {
  User,
  Trip,
  Comment,
  Budget,
  Plan,
};
