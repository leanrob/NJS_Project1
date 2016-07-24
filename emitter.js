function Emitter() {
    this.event = {

    };
}

// Create a new property entitled whatever "type" is and a listener (which is a function)
Emitter.prototype.on = function(type, listener) {
    this.event[type] = this.event[type] || [];
    this.event[type].push(listener);
}

// Loop through and run all of the functions in the array
 Emitter.prototype.emit = function(type) {
     if(this.event[type]) {
         this.event[type].forEach(function(listener) {
             listener();
         }, this);
     }
 }

 module.exports = Emitter;