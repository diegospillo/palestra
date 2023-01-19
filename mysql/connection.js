var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "palestra"
});
console.log("connesso")
module.exports = con;
