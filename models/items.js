let Sequelize = require("sequelize");

let sequelize = require("../config/connection");

let Items = sequelize.define("item", {
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
  },
  phone_number: {
    type: Sequelize.BIGINT
  }
});

Items.sync();
module.exports = Items;




