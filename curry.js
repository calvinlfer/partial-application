/**
 * Created by Calvin on 2015-09-25.
 */
'use strict';

/**
 * Partial application applied to a function of many arguments. You choose how many arguments you apply right now
 * which is usually <= total number of arguments the function takes
 * @param fn represents the function whose arguments we are applying to it
 * @returns {*}
 */
function curry(fn){
    //represents the current function arguments minus the function itself (which is usually the first argument)
    let fnArgsNow = [];

    //collect all arguments of the function in an array (it is passing more than one argument and not just fn as you see above)
    for (let i = 0; i < arguments.length; i+=1) {
        fnArgsNow.push(arguments[i]);
    }

    //remove first element of arrResults, it is the function itself
    fnArgsNow.shift();


    //all arguments are currently present (and even more, we don't mind), so call the function now
    if (fnArgsNow.length >= fn.length) {
        //note apply applies arguments to a function and takes the arguments as an array
        //it also sets the this property of the function which we set to be undefined
        return fn.apply(undefined, fnArgsNow);
    }

    //less arguments provided right now,
    //defer full application of arguments to the function by returning the user a function that will take the remaining
    //arguments (the ones you did not have at the time)
    else {
        //this function takes the remaining args that you did not put in
        return function(){
            //the remaining args that you did not put in
            let fnArgs = [];
            for (let i = 0; i < arguments.length; i+=1) {
                fnArgs.push(arguments[i]);
            }

            //fnArgs is the remaining args we did not put in earlier
            //arrResults is what came from earlier, we keep the sequence
            //note apply applies arguments to a function and takes the arguments as an array
            //it also sets the this property of the function which we set to be undefined
            return fn.apply(undefined, fnArgsNow.concat(fnArgs));
        };
    }
}

//export out the curry function
module.exports = curry;