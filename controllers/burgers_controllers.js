var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// redirect to home
router.get('/', function (req, res) {
  res.redirect('/burgers');
});


router.get('/burgers', function (req, res) {

  burger.selectAll(function (data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});


//posts new burger
router.post('/burgers/insertOne', function (req, res) {
  burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, false], function () {
    console.log("in callback");
    res.redirect('/burgers');
  });
  console.log("after insert");
});


// eats burger
router.put('/burgers/updateOne/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/burgers');
  });
});


// deletes eaten burger
router.delete('/burgers/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  burger.delete(condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;