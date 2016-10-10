'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gift = sequelize.define('Gift', {
    gift_name: DataTypes.STRING,
    max_price: DataTypes.INTEGER,
    purchased: { type: DataTypes.BOOLEAN, defaultValue: false }
   }, {
   
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
      paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    // define the table's name
    tableName: 'gifts',

    classMethods: {
      associate: function(models) {
        Gift.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });

  return Gift;
};