let Sequelize = require("sequelize");

let sequelize = new Sequelize("items_db", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    freezeTableName: true
  }
});

module.exports = sequelize;