const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Budget extends Model {}

Budget.init(
  {
    budgetTotal: {
      type: DataTypes.FLOAT,
    }
  },
  {
    sequelize,
  }
);

module.exports = Budget;