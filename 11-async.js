const { readFile ,writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err,result)  =>{
    if(err){
        console.log(err)
        return
    }
/*     console.log(result)  //without utf8 karege to buffer data milega with utf8 get first ka text */
//second approch
const first = result;
readFile('./content/first.txt','utf8',(err,result)  =>{
    if(err){
        console.log(err)
        return
    }
 const second = result
 writeFile(
    './content/ressult-async.txt',
    `Here is the result: ${first},${second}`,
    (err,result) =>{
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')
    }
)
})
})


console.log('satart the next task')// this is interesting bcz jab tak write bala function load ho raha tha talb tak ye last bala consol ko ye o/p kar diya 
