// Import the ORM to create functions that will interact with the database.
// Setup model to interface with the database
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: Sequelize.STRING
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burger;
};
