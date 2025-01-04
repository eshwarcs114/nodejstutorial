// os modules is a built in module to interact with os and server
import os from 'os';
// info about the current user
const user = os.userInfo()
console.log(user)
console.log(`The system uptime is ${os.uptime()} seconds`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS,'this is current os')