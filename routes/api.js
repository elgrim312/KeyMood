/**
 * Created by constantin on 24/05/2016.
 */
var express = require('express');
var router = express.Router();

//Charge la vue des Datas  avec "Select" dans la DB des Datas
router.get('/data', function (req, res) {

});

//Incrementation des Champs
router.get('/up/:categorie', function (req, res) {
    var categorie = req.params.categorie;
});

//Insertions dans la DB des Datas
//@todo refaire la requete
router.post('/data', function (req, res) {

});

// on exporte le module 
module.exports = router;
