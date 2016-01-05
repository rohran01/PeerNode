/**
 * Created by rohran01 on 1/5/16.
 */
var http = require('http');
var textReturn = require('./textReturn');
//var io = require('socket.io');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(textReturn.textReturn());
    response.write(textReturn.randomDollars());
    response.end();
}).listen(3000);

//io = io.listen(server);
//console.log(server);


console.log('Running on 3000!');