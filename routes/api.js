/**
 * Created by constantin on 24/05/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Data = mongoose.model('data');

//Charge la vue des Datas  avec Select dans la DB des Datas
router.get('/data', function (req, res) {
    Data.find(function (err, datas) {
        console.log(datas);
        res.render(
            'api',
            {title: 'Data', datas: datas}
        );
    });
});

//Insertions dans la DB des Datas
router.post('/data', function (req, res) {
    new Data({name: req.body.name})
        .save(function (err, superhero) {
            console.log(superhero);
            // @todo redirection a voir
            // res.redirect('/api/superheros');
        });
});

module.exports = router;
