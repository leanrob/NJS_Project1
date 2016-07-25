var fs = require('fs');

// yncronous file read and this may not be the best.
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

// The last function is a callback, using Error First Callbacks
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

// This appears before greet2's callback because it was asyncronous
console.log('Done!');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8' });

readable.on('data', function(chunk) {
    console.log(chunk);
});
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

/* Previous code

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