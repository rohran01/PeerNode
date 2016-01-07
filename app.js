/**
 * Created by rohran01 on 1/5/16.
 */
console.log('Whaddup?');

var express = require('express');
var path = require('path');
var textReturn = require('./Static/modules/textReturn');
var app = express();

app.use(express.static('static'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

//app.get('/ching', function(request, response) {
//    var ching = $('audio')[0];
//    response.send(ching);
//});

app.get('/answer', function(request, response) {
    var answer = textReturn.textReturn() + textReturn.randomDollars();
    console.log(answer);
    response.send(answer);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
});



//var http = require('http');
//var fs = require('fs');
//var index = fs.readFileSync('./index.html');
////var textReturn = require('./textReturn');
////var io = require('socket.io')();
//
//http.createServer(function(request, response) {
//    response.writeHead(200, {'Content-Type': 'text/html'});
//    //var answer = textReturn.textReturn() + textReturn.randomDollars();
//    //console.log(answer);
//    response.write(index);
//    //response.write(textReturn.textReturn());
//    //response.write(textReturn.randomDollars());
//    response.end();
//}).listen(3000);
//
////io.on('connection', function(socket){});
////io.listen(3000);


//console.log('Running on 3000!');