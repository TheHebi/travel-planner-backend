const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BudgetItem extends Model {}

BudgetItem.init(
  {
    price: {
        type: DataTypes.FLOAT,
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

module.exports = BudgetItem;