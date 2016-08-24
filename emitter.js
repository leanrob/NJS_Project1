/*
The Emitter function listens and emits events
- Building my own emitter function to better understand how it operates
 */

function Emitter() {
    this.event = {

    };
}

// Extend the Emitter prototype with a listener function called 'on'
// It is passed a 2 params
// 1. type : Name of the property
// 2. listener : the listener
Emitter.prototype.on = function(type, listener) {
    this.event[type] = this.event[type] || [];
    this.event[type].push(listener);
}

// Extend the Emitter prototype with an emit function
// It accepts 1 param
// 1. type is the name of the emit
 Emitter.prototype.emit = function(type) {
     if(this.event[type]) {
         this.event[type].forEach(function(listener) {
             listener();
         }, this);
     }
 }

 // Needed module exports
 module.exports = Emitter;