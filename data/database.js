const mysql = require("mysql2/promise");


//  insert "user" and "password" you chose when you installed MySQL on your system
const pool = mysql.createPool({
  host: "localhost",
  database: "inventory",
  user: "MYSQL_USERNAME",
  password: "MYSQL_PASSWORD",
});

module.exports = pool;