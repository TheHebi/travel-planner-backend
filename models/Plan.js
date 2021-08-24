const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Plan extends Model {}

Plan.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [1, 30],
      },
    },
    budget:{
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
  },
  {
    sequelize,
  }
);

module.exports = Plan;