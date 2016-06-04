var express = require('express');
var router = express.Router();

/* GET home page. */
//@todo remettre les routes dans app.js
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Keymood | Accueil'});
});
router.get('/interface', function (req, res, next ) {
    res.render('interface', {title: 'Keymood | Interface'})
});
router.get('/player', function (req, res, next ) {
    res.render('player', {title: 'Keymood | Player'}, concerts)
});
module.exports = router;
