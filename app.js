// Much neater way to do what we did before, done this time with expressjs

var express = require('express');
var app = express();

// Environment variable that we can use in the code
var port = process.env.PORT || 3000;

// Sending HTML data using express' get and send, only on '/'
app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello Guys!!!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Rob', lastname: 'Byrne'});
});

app.listen(port);

/*
// This is the basic setup of a node server, 
//  and is made up of all the things learned up until now.

var http = require('http');
var fs = require('fs');

// listening for a request on 1337 and do this nde code in the begining.
http.createServer(function(req, res) {
    // mimetype set to send htmls data
    // Transfering some JSON data through HTTP with the following code

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        var obj = {
            firstname: 'John',
            lastname: 'Deo'
        };
        res.end(JSON.stringify(obj));
    }


    // sending the variable which is the contents of index.html
    //fs.createReadStream(__dirname + '/index.html').pipe(res);


}).listen(1337, '127.0.0.1');

// How to run this:
// run it in terminal, then make a browser request to 'localhost:1337'
*/
/*
// listening for a request on 1337 and do this nde code in the begining.
http.createServer(function(req, res) {
    // mimetype set to send htmls data
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // sending the variable which is the contents of index.html
    fs.createReadStream(__dirname + '/index.html').pipe(res);

    // Using variables and replacing a Template setup in HTML
    // Replacing `{Message}` in index.html with message variable
    // This is forshadowing to Express I think
    // var message = 'Hello Moon!!!';
    // html = html.replace('{Message}', message);
    // res.end(html);

}).listen(1337, '127.0.0.1');

// How to run this:
// run it in terminal, then make a browser request to 'localhost:1337'
*/