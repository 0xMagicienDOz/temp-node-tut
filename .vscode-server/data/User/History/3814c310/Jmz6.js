const os = require('os')

// info about current user
const user = os.userInfo()


// method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`);