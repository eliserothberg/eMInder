'use strict';
module.exports = function(sequelize, DataTypes) {
  var giftSearch = sequelize.define('giftSearch', {
    giftName: DataTypes.STRING,
    vendor: DataTypes.STRING,
    cost: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return giftSearch;
};