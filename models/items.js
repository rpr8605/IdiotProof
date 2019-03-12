let Sequelize = require("sequelize");

let sequelize = require("../config/connection");

let Items = sequelize.define("items", {
  item_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING
  },
  expiration_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT
  },
  warranty_valid: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
});

Items.sync();
modules.exports = Items;




