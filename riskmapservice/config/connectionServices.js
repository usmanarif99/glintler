var mysql = require('mysql');
//createPool , createConnection
var connection = mysql.createPool({
  host: "glintler.in",
  user: "glintler_chandra",
  password: "Chandra@2018",
  database : "glintler_riskmap",
  debug: false,
  multipleStatements: false
});

exports.connection = connection;
