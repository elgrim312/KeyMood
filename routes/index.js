var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Projet JS' });
});
router.get('/interface', function (req, res, next ) {
    res.render('interface', {title: 'interface'})
});

module.exports = router;
