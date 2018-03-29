var mysql = require("mysql");
// connection configurations 

var connection = mysql.createConnection({
  host: "iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "	ssudifow2f7ed77o",
  password: "ui99zjnt38c69sr2",
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
