let _ = require('../IsA')

function shifted ( state, target = '*' ) {}
function shifted2 ( state, ...args ) {}
function shifted3 ( state, args={} ) {}
function shifted4 ( state, args_123 = {} ) {}

async function simple (greetings1, greetings2, terms, ignite) {}

console.log( _.parameterNames( shifted ) )
console.log( _.parameterNames( shifted2 ) )
console.log( _.parameterNames( shifted3 ) )
console.log( _.parameterNames( shifted4 ) )
console.log( _.parameterNames( simple ) )

console.log( 'args_123'.match( /([\\.A-Za-z]+)/g ) )
