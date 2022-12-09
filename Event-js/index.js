var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I am feeling hungry!');
}

//Assign the event handler to an event:
eventEmitter.on('hungry', myEventHandler);

//Fire the 'hungry' event:
eventEmitter.emit('hungry');