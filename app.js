// Much neater way to do what we did before, done this time with expressjs

var express = require('express');
var bodyParser = require( 'body-parser' );
var app = express();

// Environment variable that we can use in the code
var port = process.env.PORT || 3000;

// Used on line 42
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

// Whenever we access domain/assets then we will go find and make available the public folder
app.use('/assets', express.static(__dirname + '/public'));

// Setting up ejs in the code, set view engine to ejs
app.set('view engine', 'ejs');

// Console.log's the name of any url loaded as long as it starts with a '/'
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    // Run the next middleware
    next();
});

// Sending HTML data using express' get and send, only on '/'
// Sending a static file when a request happens
app.get('/', function(req, res) {

    // calling the index.ejs file based on line 13 in the code
    // line 13 is where we set the template engine ejs as our view engine
    res.render('index');
});

// dealing with a route and using an id variable in the url that can be accessed in code
// Qstr rep.query will be empty is nothing is passed to it.
app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});
// Add a querystring by putting the following in the browser bar, makes Qstr = 123...
// http://localhost:3000/person/1?qstr=123

// Grab information using a form post in your html, or in this case ejs files
// See index.js for reference
app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);    
});

app.post('/personjson', jsonParser, function() {
    res.send('Thanks for the json, nom nom nom...');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})

app.get('/api', function(req, res) {
    res.json({ firstname: 'Rob', lastname: 'Byrne'});
});

app.listen(port);


/*

*/
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
Creating a server in NodeJS on 1337 and 127.0.0.1
 */
/*
// listening for a request on 1337
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