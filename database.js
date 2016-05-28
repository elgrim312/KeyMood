/**
 * Created by constantin on 25/05/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//@todo gerer la date en insertion DB
var Data = new Schema(
    {name: String}
);

mongoose.model('data', Data);

mongoose.connect('mongodb://localhost/data');