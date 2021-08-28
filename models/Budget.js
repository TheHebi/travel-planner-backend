const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Budget extends Model {}

Budget.init(
  {
    category:{
      type:DataTypes.STRING
    },
    description:{
      type:DataTypes.STRING
    },
    cost:{
      type:DataTypes.FLOAT
    }
  },
  {
    sequelize,
  }
);

module.exports = Budget;
