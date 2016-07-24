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