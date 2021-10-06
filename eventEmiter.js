const EventEmitter = require('events');

const subject = new EventEmitter();

subject.on('event', function (a, b) {
  console.log(a, b, this);
});

subject.emit('event', 'Henrique', 'Baêta');
