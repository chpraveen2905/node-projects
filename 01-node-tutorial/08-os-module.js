const os = require('os');

//Information about the user
console.log(os.userInfo());

//Method returs the system uptime in seconds

console.log(`The System uptime is: ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
