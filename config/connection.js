let Sequelize = require("sequelize");

let sequelize = new Sequelize("purchasedItems_db", "root", "notlimah", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

if (process.env.JAWSDB_URL) {
  connection = mysql.create.connection(process.env.JAWSDB);
} else {
  connection = mysql.createconnection({
  host: "localhost",
  user: "root",
  password: "notlimah",
  database: "purchasedItems_db"
});
};



module.exports = sequelize;