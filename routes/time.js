var express = require('express');
var router = express.Router();

router.get('/now', function (req, res, next) {
    let date = new Date;
    res.render('time', {
        title: 'Date:',
        currentTime: date
    });
  });

module.exports = router;