// Common.js every file is a module (by default )
// module is a encapsulated code only sharing what is needed

import name from './4names.js'
import sayHiModule from './5utils.js'
// in the below module there is a function call and when i import this
// that funciton gets invoked which is kinda cool not gonna lie

// also when node exports a funciton it wraps it inside the funciton which is probably 
// why the invoking crap is happening
import './6coolshit.js'

const { sayHi } = sayHiModule
const {j , p } = name

console.log(j)
sayHi(p)


