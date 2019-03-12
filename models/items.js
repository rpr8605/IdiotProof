let Sequelize = require("sequelize");

let sequelize = require("../config/connection");

let Items = sequelize.define("items", {
  item_name: Sequelize.STRING,
  category: Sequelize.DATEONLY,
  notes: Sequelize.TEXT,
  warranty_valid: Sequelize.BOOLEAN
})

Items.sync();

module.exports = Items;




