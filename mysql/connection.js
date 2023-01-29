var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "id19588874_database",
  password: "Diego120405.",
  database: "id19588874_dbspillo"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
//module.exports = con;