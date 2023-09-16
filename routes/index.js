var express = require('express');
var router = express.Router();
const apiService = require('../services');

router.get('/', async function (req, res, next) {
  const { slip } = await apiService.getAdvice();

  res.render('index', {
    data: {
      title: `#${slip.id}`,
      quote: slip.advice,
    },
  });
});

module.exports = router;
