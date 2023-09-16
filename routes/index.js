var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const data = {
    title: 'Texas, baby!',
    quote: 'He go Lionel Messi, I go Tom Brady!',
  };
  res.render('index', { data });
});

module.exports = router;
