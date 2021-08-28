const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Budget extends Model {}

Budget.init(
  {
    
  },
  {
    sequelize,
  }
);

module.exports = Budget;