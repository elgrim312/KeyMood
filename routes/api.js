/**
 * Created by constantin on 24/05/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Data = mongoose.model('data');

//Charge la vue des Datas  avec "Select" dans la DB des Datas
router.get('/data', function (req, res) {
    Data.find(function (err, datas) {
        if (err) {
            res.json({'ERROR': err});
        } else {
            res.render(
                'stat', {title: 'Stats', datas: datas}
            );
        }
    });
});

//Incrementation des Champs
router.put('/up/:categorie', function (req, res) {
    var categorie = req.params.categorie;
    Data.update({categorie: categorie}, {$inc: {number: 1}}, function (err, action) {
        if (err) return handleError(err);
        console.log(action);
    });
});

//Insertions dans la DB des Datas
//@todo refaire la requete
router.post('/data', function (req, res) {
    new Data({mot1: req.body.mot1, mot2: req.body.mot2, mot3: req.body.mot3, genre: req.body.genre})
        .save(function (err, data) {
            // @todo redirection a voir
            if (err) {
                res.json({'ERROR': err});
            } else {
                res.status(200);
                res.redirect('/');
            }
        });
});

// on exporte le module 
module.exports = router;
