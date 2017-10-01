let _ = require('../IsA')

function shifted ( state, target = '*' ) {}
function shifted2 ( state, ...args ) {}
function shifted3 ( state, args={} ) {}

console.log( _.parameterNames( shifted ) )
console.log( _.parameterNames( shifted2 ) )
console.log( _.parameterNames( shifted3 ) )
