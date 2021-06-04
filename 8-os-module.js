// buil- in module 
 //------1 os module ------

 const os =  require('os')
/* 
 //info about current user
 const user = os.userInfo()
 console.log(user)
// about hostname 
 const hostname = os.hostname()
 console.log(hostname)

/* // about version
 const version =os.version()
 console.log(os.version) */

/*
// about totalmem
const arch=os.arch()
console.log(arch) */



const user = os.userInfo()
 console.log(user)

 //method returns the system updates in seconds
 console.log(`The return update is  ${os.uptime()} second `)

 const currentOS ={
     name: os.type(),
     release: os.release(),
     totalmem: os.totalmem(),
     frermem: os.freemem(),
 }
 console.log(currentOS)