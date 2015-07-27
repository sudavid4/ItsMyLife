'use strict';
// Require our dependencies
var express = require('express'),
    http = require('http'),

    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Criancas = require('./models/Criancas.js');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

app.disable('etag');

mongoose.connect('mongodb://localhost/ItsMyLife');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.route('/criancas/:id')
    .get(Criancas.getReceiptById);

app.route('/criancas')
    .get(Criancas.list)
    .post(Criancas.create);

var server = http.createServer(app).listen(port, function () {
    console.log('Express server listening on port ' + port);
});