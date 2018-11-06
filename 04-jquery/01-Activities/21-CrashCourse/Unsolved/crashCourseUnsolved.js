// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

var a = function hi(){
    console.log('hi');
}
var b = 1;
var c = 'wow';
var d = true;
var e = null;


// 2. ARRAYS
// ==========================================================

// Create an array of five strings
var arr = ['one', 'two', 'three', 'four', 'five'];



// Create an array of five numbers




// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
var i;
for(i = 0; i < 5 ;i++){
    console.log('My name is bob');
}




// Create a for loop that loops through your five string array
var i;
for (i=0; i < arr.length; i++){
    console.log(arr[i])
}



// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function divide(a,p){
    console.log(a/p);
}


// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

function High(arr){
    for (var i=0; i <arr.length; i++){
        console.log(arr[i]);
    }
}


// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object
var FirstObject = {
    'NewYork' : 'NY',
    'Washington' : 'WA'
}

var FirstObject = {
    'NewYork' : 'NY',
    'Washington' : 'WA',
	'a' : function hi(){
			console.log(this);
		}
}



// Console log any three of the properties in that object



// Create an Array of 5 Objects



// Console log 3 properties for every one of the five objects



// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.




// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
