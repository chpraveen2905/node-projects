//CommonJs, --> Every File is module (by default)
//Modules ---> Encapsulated Code(only share minimum)

const names = require('./04-names');
const sayHello = require('./05-utils');

const data = require('./06-alternative-flavor');

console.log(names.praveen);
console.log(names.peter);
console.log(names);

sayHello(`abc`);
sayHello(names.praveen);
sayHello(names);

console.log(data);
