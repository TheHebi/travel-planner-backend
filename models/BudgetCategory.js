const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BudgetCategory extends Model {}

BudgetCategory.init(
  {
    budgetItem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize,
  }
);

module.exports = BudgetCategory;