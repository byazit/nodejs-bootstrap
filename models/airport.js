'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Airport.init({
    AirportName: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};