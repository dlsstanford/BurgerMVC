var mysql = require("mysql");

var connection; //declare a connection


if (process.env.JAWSDB_BLUE_URL) {
  //if on heroku
  connection = mysql.createConnection(process.env.JAWSDB_BLUE_URL);
} else {
  // if running locally
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", //my root password
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
