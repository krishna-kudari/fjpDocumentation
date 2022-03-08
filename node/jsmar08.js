//os Module//
//os module provides functions that can use retrieve information from the underlying os ,and interact with it.

const os=require("os")

let mySystemArch=os.arch();
console.log(mySystemArch);

//information of cpu
// let cpuinfo=os.cpus()
// console.log(cpuinfo);

//hostname
let hostname=os.hostname()
console.log(hostname);

//networkinfo
let networkinfo=os.networkInterfaces()
console.log(networkinfo);
// console.log(os);

console.log(os.release());

console.log(os.totalmem());
console.log((os.uptime()/3600));
console.log(os.userInfo())
console.log(os.platform());
console.log(os.type());
