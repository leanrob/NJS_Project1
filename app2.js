// Pipes and readable wrtiable
/*
Readable and Writable Streams as well as Piping in NodeJS
- Creating 3 streams, one readable and 2 writable
- use zlib module to create a Gzip
- pipe the readable stream to both writable streams
- make sure to compress the
 */

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// Creating a compressed file as a stream and can pipe its output as well...
var gzip = zlib.createGzip();

// Simple way to send a chunk of data from one file to anther through a pipe
readable.pipe(writable);

// on every chunk we will write to gzip and then write to compressed
//  all of this is done with method chaining
readable.pipe(gzip).pipe(compressed);


/*
Asynchronous file reading in NodeJS and using it to read from a .txt file
- requires fs module to createReadStream
- synchronous file reading with fs.readFileSync
- asynchronous file reading with fs.readFile
*/
/*

// synchronous file read and this may not be the best.
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

// The last function is a callback, using Error First Callbacks
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

// This appears before greet2's callback because it was asynchronous
console.log('Done!');

// encoding added as an object in this data stream
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8' });

readable.on('data', function(chunk) {
    console.log(chunk);
});

*/


/*

*/
/*

// Inheriting from the event emitter...

var EventEmitter = require('events');
var util = require('util');
var eventConfig = require('./config').events;

function Greetr() {
    // Adding a superconstructer for complete inheritance
    // We do this because we want Greetr to be an event emitter 
    //  and so one must be called and created whenever a Greetr is
    EventEmitter.call(this);
    this.greeting = 'Hello World';
}

// making sure that utils inherits is used to inherit events and our Greetr() function
util.inherits(Greetr, EventEmitter);

// The data in this can also be passed through the emitter 
//  as long as we expect it down bellow when we add the listener
Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit(eventConfig.GREET, data);
}

var greetr1 = new Greetr();

// Now we can add an event emitter to our new Greetr() function namer greetr1
// Every time the greet is run this event listener will be run
greetr1.on(eventConfig.GREET, function(data) {
    console.log('Someone Greeted!' + " " + data);
});

greetr1.greet('Robert');

// Template literals ES6

var name = "Robert";

var greet = "hello " + name;

// This is object Literal syntax
var greet2 = `hello ${ name }`;

console.log(greet);
console.log(greet2);

*/


/*
First use of the event emitter.
- setup the event emitter and requires
- Add 2 listeners titled GREET to our event emitter
- Then, emit the GREET events
*/
/*
var Emitter = require('events');

var eventConfig = require('./config').events;

var emtr = new Emitter();

// adding a listener function on the greet method
emtr.on(eventConfig.GREET, function() {
    console.log("Someone, somewhere say hello");
});

// adding another sure why not
emtr.on(eventConfig.GREET, function() {
    console.log("There has been a greeting");
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);
*/