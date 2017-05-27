// Import the ORM to create functions that will interact with the database.
// Setup model to interface with the database
// var orm = require("../config/orm.js");
var Sequelize = require('sequelize');
// var sequelize = require('../config/connection.js');
//
// var Burger = sequelize.define('burger', {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     burger_name: {
//       type: Sequelize.STRING
//     },
//     devoured: {
//       type: Sequelize.BOOLEAN,
//       allowNull: false,
//       defaultValue: false
//     }
//    }, {});

//sync with DB
// sync is whenever it connects with the database
// force: will drop data if it already exists
// Burger.sync({force: true})
//
// module.exports = Burger;

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
