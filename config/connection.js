const Sequelize = require("sequelize");

require("dotenv").config();

// create connection to our db
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
  }
);

// const sequelize = new Sequelize(
//   "just_tech_news",
//   "root",
//   "",
//   {
//     host: "localhost",
//     dialect: "mysql",
//     socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
//   },
//   function (err, data) {
//     if (err) console.log(err);
//     console.log(data);
//   }
// );

module.exports = sequelize;
