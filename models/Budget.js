const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Budget extends Model {}

Budget.init(
  {
    total:{
      type: DataTypes.INTEGER,
      defaultValue:0
    }
  },
  {
    sequelize,
  }
);

module.exports = Budget;
