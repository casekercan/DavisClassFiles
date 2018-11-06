var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);

//If the two numbers are equal then output: "true". Otherwise output: "false".
console.log((num1 === num2) ? "TRUE" : "FALSE");

//Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.
console.log(((num1 % 7) + (num2 % 7)) === 0 ? "TRUE" : "FALSE");