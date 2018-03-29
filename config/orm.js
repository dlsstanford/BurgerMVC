var connection = require("./connection.js");

// Object Relational Mapper (ORM)
function printQuestionMarks(num) {
  var arr = [];
 for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

function objToSql(ob) {
  // attaches values to columns
  var arr = [];
  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      arr.push(key + '=' + ob[key]);
    }
  }
  return arr.toString();
}

// Retrieve all data
var orm = {
  selectAll: function (table, callback) {
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

    // vals is an array of values that we want to save to cols
    // cols are the columns we want to insert the values into
  insertOne: function (table, cols, vals, callback) {
    var queryString = 'INSERT INTO ' + table;

    queryString = queryString + ' (';
    queryString = queryString + cols.toString();
    queryString = queryString + ') ';
    queryString = queryString + 'VALUES (';
    queryString = queryString + printQuestionMarks(vals.length);
    queryString = queryString + ') ';

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
    // objColVals = columns and values to update
  updateOne: function (table, objColVals, condition, callback) {
    var queryString = 'UPDATE ' + table;

    queryString = queryString + ' SET ';
    queryString = queryString + objToSql(objColVals);
    queryString = queryString + ' WHERE ';
    queryString = queryString + condition;

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  delete: function (table, condition, callback) {
    var queryString = 'DELETE FROM ' + table;
    queryString = queryString + ' WHERE ';
    queryString = queryString + condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;