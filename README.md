# What is this?
Currying or Partial Application is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument (partial application).

### Sample usage (TODO)
```
'use strict';
let curry = require('./curry');

function add(a, b, c) {
    return a + b + c;
}


//supply all arguments
console.log((curry(add, 3, 4, 5)));

//supply 2 arguments for now
let partially2ArgAppliedAdd = curry(add, 3, 4);

//supply the 3rd argument later
console.log(partially2ArgAppliedAdd(5));
```

