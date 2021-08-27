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
    totalCost:{
      type: DataTypes.FLOAT,
      validate:{
        isFloat:true
      }
    },
    travelMethod:{
      type: DataTypes.STRING
    },
    lodging:{
      type: DataTypes.STRING
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
