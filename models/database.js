/**
 * Created by constantin on 25/05/2016.
 */

//Modele Mongoose des DATAS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Data = new Schema(
    {
        categorie: {type: String},
        number: {type: Number, default: 0}
        //date: {type: Date, default: Date.now}
    }
);

mongoose.model('data', Data);
//Connexion a la Base de Données
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://constantin:u7nzW3nd.mlab.com:19468/heroku_ccdkbmhj');