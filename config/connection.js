var mysql = require("mysql");
// connection configurations 
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cool",
  database: "burgers_db"
});
// function to create connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// export out connection package
module.exports = connection;
