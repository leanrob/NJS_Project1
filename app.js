// This is the basic setup of a node server, 
//  and is made up of all the things learned up until now.

var http = require('http');

// listening for a request on 1337 and do this nde code in the begining.
http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');

}).listen(1337, '127.0.0.1');