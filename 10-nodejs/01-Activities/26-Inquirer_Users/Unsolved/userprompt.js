// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },

        // Here we create a basic password-protected text prompt.
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        // Here we give the user a list/checkbox to choose from.
        {
            type: "list",
            message: "What size Ice Cream would you like?",
            choices: ["Small", "Medium", "Large", "A Bucket"],
            name: "size"
        },

        {
            type: "checkbox",
            message: "What Ice Cream Flavor(s)?",
            choices: ["Vanilla", "Chocolate", "Strawberry", "Peanut Butter", "Mint Chocolate Chip", "Rocky Road"],
            name: "flavor"
        },
        // Here we ask the user to confirm.
        {
            type: "confirm",
            message: "Ready to submit order?",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("Thank you " + inquirerResponse.username);
            console.log("Your " + inquirerResponse.size + " " + inquirerResponse.flavor + " Ice Cream has been ordered!");
        }
        else {
            console.log("Fine - " + inquirerResponse.username + " no Ice Cream for you!");
        }
    });
