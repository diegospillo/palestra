var mysql = require('mysql');

   var mysqlHost = process.env.MYSQL_HOST || 'localhost';
   var mysqlPort = process.env.MYSQL_PORT || '3306';
   var mysqlUser = process.env.MYSQL_USER || 'root';
   var mysqlPass = process.env.MYSQL_PASS || 'Calcio1204.';
   var mysqlDB   = process.env.MYSQL_DB   || 'palestra';

   var con = mysql.createConnection({
     host: mysqlHost,
     port: mysqlPort,
     user: mysqlUser,
     password: mysqlPass,
     database: mysqlDB
   });


console.log("connesso")
module.exports = con;