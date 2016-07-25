// This is the basic setup of a node server, 
//  and is made up of all the things learned up until now.

var http = require('http');
var fs = require('fs');

// listening for a request on 1337 and do this nde code in the begining.
http.createServer(function(req, res) {
    // mimetype set to send htmls data
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // sending the variable which is the contents of index.html
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    // Using variables and replacing a Template setup in HTML
    // Replacing `{Message}` in index.html with message variable
    // This is forshadowing to Express I think
    var message = 'Hello Moon!!!';
    html = html.replace('{Message}', message);
    res.end(html);

}).listen(1337, '127.0.0.1');

// How to run this:
// run it in terminal, then make a browser request to 'localhost:1337'