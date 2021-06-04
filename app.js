// manual approch {create package.json int the root, create property etc}

const _ =require('lodash')
const  items = [1, [2, [3, [4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)