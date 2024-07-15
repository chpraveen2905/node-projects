//GLOBALS - NO WINDOW//

const { log } = require('console');

/*
__dirname - Path to Current Directory
__filename -- File Name
require --> function to use modules(Common JS)
module ---> info about current module (file)
process ---> info about the environment where the program is being executed
*/

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log('Hi Praveen, welcome to Node.js');
}, 1000);
