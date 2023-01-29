var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "id19588874_database",
  password: "Diego120405.",
  database: "id19588874_dbspillo",
  socketPath: '/var/run/mysqld/mysqld.sock'
});
console.log("connesso")
module.exports = con;