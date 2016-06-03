var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('landing', { title: 'Keymood | Accueil' });
});
router.get('/interface', function (req, res, next ) {
    res.render('interface', {title: 'Keymood | Interface'})
});
router.get('/interface', function (req, res, next ) {
    res.render('player', {title: 'Keymood | Player'})
});
router.get('/interface', function (req, res, next ) {
    res.render('stat', {title: 'Keymood | Statistiques'})
=======
  res.render('landing', { title: 'Projet JS' });
>>>>>>> alexandre_hello
});

module.exports = router;
