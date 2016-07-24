var Emitter = require('./emitter');

var emtr = new Emitter();

// adding a listener function on the greet method
emtr.on('greet', function() {
    console.log("Someone, somewhere sai hello");
});

// adding another sure why not
emtr.on('greet', function() {
    console.log("There has been a greeting");
});

console.log('Hello!');
emtr.emit('greet');