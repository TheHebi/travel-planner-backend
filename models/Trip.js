const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    departure:{
      type: DataTypes.DATE
    },
    return:{
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
  }
);

module.exports = Trip;
