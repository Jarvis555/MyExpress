var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let date = new Date;
  res.render('index', {
    title: 'Express',
    name: 'Jarvis Jackson',
    address: '511 E Arkansas lane',
    city: 'Arlington',
    State: 'Texas',
    zip: '76010',
    date: date,
  });
});

module.exports = router;