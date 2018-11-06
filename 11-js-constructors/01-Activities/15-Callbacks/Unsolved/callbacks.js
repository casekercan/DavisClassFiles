var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function fun() {
    console.log("FUN FUNCTION");
}

function write(fun) {
    console.log("message");
    fun()
}

// Write a function that runs a function argument if
// its other argument is truthy.
truthyTester = function (arg1, arg2) {
    if (arg2 == true) {
        arg1();
    }
}
// Write a function that accepts a function argument and a value, and returns a function that returns the result of executing the function argument with the value.
// This isn't as hard as it sounds!

function wow(func, arg) {
    return function () {
        return func(arg);
    };
}


// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?




