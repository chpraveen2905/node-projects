//get back to the class
//if we want custom extend from the class
//otherwise just for emitting and handling events create instance

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) =>
  console.log(`Some other Logic ${name}, ${id}`)
);

customEmitter.emit('response', 'Praveen', 35);
