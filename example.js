'use strict';
let partiallyApply = require('./partiallyApply');

function add(a, b, c) {
    return a + b + c;
}


//supply all arguments
console.log((partiallyApply(add, 3, 4, 5)));

//supply 2 arguments for now
let partially2ArgAppliedAdd = partiallyApply(add, 3, 4);

//supply the 3rd argument later
console.log(partially2ArgAppliedAdd(5));