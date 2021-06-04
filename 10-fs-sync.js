const {readFileSync, writeFileSync} = require('fs')
console.log('start ')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


//onsole.log(first, second)

/*  issase ye file jitna bar hoga utna bar first &second me Here is the result
add hota chala jayega */
writeFileSync(
    './content/ressult-sync.txt',
    `Here is the result: ${first},${second}`,
    {flag: 'a'}
)
console.log('done wiht this txt')
console.log('starting the next text ')